import {getUser } from './cookieHandler';
import axios from 'axios';
import { useCartStore} from '../stores/useCartStore'
import { notification } from "antd";
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons";



const openOrderNotification = () =>
  notification.open({
    message: "Product added to the Cart",
    description: title,
    placement: "bottomLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })


async function createOrder (globalProducts) {
    
    const userId = getUser().id;

    const products = globalProducts.map(product => product.title).join(', ');

    const data = {
        userId,
        products
    }
    try {
        const response = await axios.post("api/orders", data);
        console.log(response)
        
        return response.status

    } catch (error) {
        console.error(error.response.status)
    }
}

export default createOrder;

