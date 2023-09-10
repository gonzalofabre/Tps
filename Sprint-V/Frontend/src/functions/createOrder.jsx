import {getUser } from './cookieHandler';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




async function createOrder (globalProducts) {
    const navigate = useNavigate();
    
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

