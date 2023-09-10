import "../../App.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Welcome from "../../components/Welcome/Welcome";
import Card from "../../components/Card/Card";
import Logout from "../../components/Logout/Logout";
import OrderButton from "../../components/OrderButton/OrderButton";
import { Cart } from "../../components/Cart/Cart";
import peek from "../../utils/peek";
import { Button, Drawer } from "antd";
import { ShoppingCartOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useLoginStore } from "../../stores/useLoginStore";
import { useLogStore } from "../../stores/useLogStore";
import { getUser } from "../../functions/cookieHandler";
import { useCartStore } from "../../stores/useCartStore";
// import useOrderMutation from '../../hooks/useOrderMutation';

function Home() {
  const [products, setProducts] = useState([]);
  const globalProducts = useCartStore((state) => state.products);


  //Filters

  const [filterByName, setFilterByName] = useState("");
  const [filterByMinPrice, setFilterByMinPrice] = useState(0);
  const [filterByMaxPrice, setFilterByMaxPrice] = useState(Infinity);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];
  const [filterByCategory, setFilterByCategory] = useState("-");

  //Drawer
  const [isCartDrawerShow, setIsCartDrawerShow] = useState(false);

  //Login
  const isLoginShow = useLoginStore((state) => state.isLoginShow);
  const isLoggedIn = useLogStore((state) => state.isLoggedIn);
  const { toggleIsLoggedIn } = useLogStore();

  //Datos de cookie
  const userCookies = getUser();

  useEffect(() => {
    fetch(peek("http://localhost:3000/products"))
      .then((data) => peek(data.json()))
      // .then(sleep(3000).then((data) => data))
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);


  return (
    <>
    <div className="header">
      <div className="header_logo">
        <img src="https://placekitten.com/184/84"></img>

        <h1> My E-commerce</h1>
      </div>
      <div className="header_links">
      <Logout />

        </div>
    </div>
 <Welcome name={userCookies.name} />

 
      <div className="root">
        <div className="filters">
          <h3>Buscar por :</h3>

          <div className="filters-input">
            <label htmlFor="filter-name">Nombre</label>
            <input
              type="text"
              id="name"
              name="id"
              onChange={(e) => setFilterByName(e.target.value)}
              defaultValue={filterByName}
            />
          </div>

          <br />
          <div className="filters-input">
            <label htmlFor="filter-min-price">Precio mínimo</label>
            <input
              type="number"
              name="filter-min-price"
              id="filter-min-price"
              onChange={(e) => setFilterByMinPrice(e.target.value)}
              defaultValue={filterByMinPrice}
            />
          </div>

          <br />
          <div className="filters-input">
            <label htmlFor="filter-max-price">Precio máximo</label>
            <input
              type="number"
              name="filter-max-price"
              id="filter-max-price"
              onChange={(e) => setFilterByMaxPrice(e.target.value)}
            />
          </div>

          <br />
          <div className="filters-input">
            <label htmlFor="filter-category">Categoría</label>
            <select
              name="filter-category"
              id="filter-category"
              onChange={(e) => setFilterByCategory(e.target.value)}
            >
              <option value="-">-</option>
              {uniqueCategories.map((category, i) => (
                <option key={`key-option-${category}${i}`} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="products-layout">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(filterByName.toLowerCase())
            )
            .filter((product) => product.price > filterByMinPrice)
            .filter((product) =>
              filterByMaxPrice != 0 ? product.price < filterByMaxPrice : product
            )
            .filter((product) =>
              filterByCategory === "-"
                ? true
                : product.category === filterByCategory
            )
            .map((product) => (
              <Card
                key={`key-${product.title}-${product.id}`}
                title={product.title}
                imageUrl={product.image}
                description={product.description}
                price={product.price}
                product={product}
                id={product.id}
              ></Card>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;