import {Button} from 'antd';
import { useNavigate } from "react-router-dom";
import {getUser } from '../../functions/cookieHandler';
import axios from 'axios';
import {useCartStore} from '../../stores/useCartStore'



 

function OrderButton() {
    const globalProducts = useCartStore((state) => state.products);
    const navigate = useNavigate();
  return (
    <Button
      type="primary"
      size="large"
      onClick={async () => {


        const userId = getUser().id;
      
        const products = globalProducts.map((product) => product.title).join(", ");
      
        const data = {
          userId,
          products,
        };
        try {
          const response = await axios.post("api/orders", data);
          if(response.status === 200) {
              navigate('/success')
          }
      
          return response.status;
        } catch (error) {
          console.error(error.response.status);
        }
      }

      }
    >
      Buy!
    </Button>
  );
}

export default OrderButton
