import { useCartStore } from "../../stores/useCartStore";
import { List, Avatar } from 'antd'
import './styles.css'

const Cart = () => {
  const globalProducts = useCartStore((state) => state.products);
  return (
    <List
      itemLayout="horizontal"
      dataSource={globalProducts}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
              className="avatar"
                src={item.image}
              />
            }
            title={<a className="cart_list_item_title" href="https://ant.design">{`${item.title.slice(0, 35)}...`}</a>}
            description={<p className="cart_list_item_price">{item.price}</p>}
          />
          
        </List.Item>
        
      )}
    />
  );
};
export { Cart };
