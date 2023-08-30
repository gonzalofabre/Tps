// import { useState } from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import peek from './utils/peek'
// import sleep from './utils/sleep'

function App() {
  const [products, setProducts] = useState([])

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
    <div className='products-layout'>
    {
    products.map((product) => (
      <Card 
      key={`key-${product.title}-${product.price}`}
    title={product.title}
    imageUrl = {product.image}
    description={product.description}
    price={product.price} ></Card>
    )) }

 </div>

 </div>

    </>
  )
}

export default App
