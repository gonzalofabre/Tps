// import { useState } from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Login from './components/Login'
import peek from './utils/peek'
// import sleep from './utils/sleep'

function App() {
  const [products, setProducts] = useState([])

  //Filters

  const [filterByName, setFilterByName] = useState("");
  const [filterByMinPrice, setFilterByMinPrice] = useState(0);
  const [filterByMaxPrice, setFilterByMaxPrice] = useState(Infinity);

  const categories = products.map((product) => product.category)
  const uniqueCategories = [...new Set(categories)]
  const [filterByCategory, setFilterByCategory] = useState("-")

  useEffect(() => {
    fetch(peek("http://localhost:3000/products"))
    .then((data) => peek(data.json()))
    // .then(sleep(3000).then((data) => data))
    .then((data) => {
      console.log(data)
      setProducts(data)
    })
  }, [])

  return (
    <>
    <div className='root'>
    <div className="filters">
        <h3>Buscar por :</h3>

       <div className='filters-input'> <label htmlFor="filter-name">Nombre</label>
        <input type="text" id="name" name="id"
        onChange={(e) => setFilterByName(e.target.value)}
        defaultValue={filterByName}/>
        </div>

        <br />
        <div className='filters-input'>
        <label htmlFor="filter-min-price">Precio mínimo</label>
        <input type="number" name="filter-min-price" id="filter-min-price"
        onChange={(e) => setFilterByMinPrice(e.target.value)}
        defaultValue={filterByMinPrice} />
        </div>

        <br />
        <div className='filters-input'>
        <label htmlFor="filter-max-price">Precio máximo</label>
        <input type="number" name="filter-max-price" id="filter-max-price"
        onChange={(e) =>setFilterByMaxPrice(e.target.value)}/>
        </div>

        <br />
        <div className='filters-input'>
        <label htmlFor="filter-category">Categoría</label>
        <select name="filter-category" id="filter-category"
        onChange={(e) => setFilterByCategory(e.target.value)}>
          <option value="-">-</option>
          {
            uniqueCategories.map((category, i) => (
              <option key={`key-option-${category}${i}`} value={category}>{category}</option>
            ))
          }
        </select>
        </div>
        


    </div  >
    <div className='products-layout'>
    {
    products
    .filter((product) => product.title.toLowerCase().includes(filterByName.toLowerCase()))
    .filter((product) => product.price > filterByMinPrice)
    .filter((product) => filterByMaxPrice!=0 ? product.price < filterByMaxPrice : product)
    .filter((product) => filterByCategory === "-" ? true : product.category === filterByCategory)
    .map((product) => (
      <Card 
      key={`key-${product.title}-${product.price}`}
    title={product.title}
    imageUrl = {product.image}
    description={product.description}
    price={product.price} ></Card>
    )) }
    <Login></Login>

 </div>

 </div>

    </>
  )
}

export default App
