import "../../App.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Welcome from "../../components/Welcome/Welcome";
import Card from "../../components/Card/Card";
import OrderButton from "../../components/OrderButton/OrderButton";
import { Cart } from "../../components/Cart/Cart";
import peek from "../../utils/peek";
import { Button, Drawer } from "antd";
import { ShoppingCartOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useLoginStore } from "../../stores/useLoginStore";
import { useLogStore } from "../../stores/useLogStore";
import { getUser } from "../../functions/cookieHandler";
import { useCartStore } from "../../stores/useCartStore";

//Query Products:
import useProductsQuery from "../../hooks/useProductsQuery";

function Home() {

  // const [products, setProducts] = useState([]);
  const { products, isLoading } = useProductsQuery();
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

  // useEffect(() => {
  //   fetch(peek("/api/products"))
  //     .then((data) => peek(data.json()))
  //     // .then(sleep(3000).then((data) => data))
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  useEffect(() => {
    userCookies.id === undefined ? toggleIsLoggedIn(false):toggleIsLoggedIn(true);
  }, [userCookies.id]);

  return (
    <>
      {console.log(isLoggedIn)}
      {console.log(userCookies.id)}
      <Header />

      <Drawer
        title={
          <div>
          <div className="drawer_buy">
            <p>{userCookies.id === 'admin'? <span>You Shall Not Buy! admin</span>:"Your Products: "  }</p>
            <OrderButton />
          </div>
          {userCookies.id === undefined ? <div>
            <span style={{fontSize: "14px", color: "red", display: "flex"}}>Please Login to Buy!</span>
          </div> : ""}
          
          </div>
        }
        onClose={() => setIsCartDrawerShow(false)}
        open={isCartDrawerShow}
      >
        <Cart></Cart>
      </Drawer>

      <div className="box_button_open_drawer">
        <Button
          style={{
            margin: "0.3rem 1rem 0.3rem 0.3rem",
            padding: "6.428571428571429px 1.6rem",
          }}
          size="large"
        >
          {" "}
          <MenuFoldOutlined />{" "}
        </Button>
        {isLoginShow ? <Login /> : ""}
        {isLoggedIn ? <Welcome name={userCookies.name} /> : ""}

        <Button
          style={{
            margin: "0.3rem 1rem 0.3rem 0.3rem",
            padding: "6.428571428571429px 1.6rem",
          }}
          type="primary"
          size="large"
          onClick={() => setIsCartDrawerShow(true)}
        >
          Cart
          <ShoppingCartOutlined />
        </Button>
      </div>

      <div className="root">
        <div className="filters">
          <h3>Search by :</h3>

          <div className="filters-input">
            <label htmlFor="filter-name">Name</label>
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
            <label htmlFor="filter-min-price">Min Price</label>
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
            <label htmlFor="filter-max-price">Max Price</label>
            <input
              type="number"
              name="filter-max-price"
              id="filter-max-price"
              onChange={(e) => setFilterByMaxPrice(e.target.value)}
            />
          </div>

          <br />
          <div className="filters-input">
            <label htmlFor="filter-category">Category</label>
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
