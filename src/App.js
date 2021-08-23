import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import products from './dummyData.json'

function App () {
  const [cart, setCart] = useState([])

  const getProductById = id => products.find(product => product._id === id)

  const addToCart = id => {
    const product = getProductById(id)
    product.quantity = 1
    setCart(prevCart => [...prevCart, product])
  }

  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='container my-4'>
          <Route exact path='/'>
            <Home products={products} addToCart={addToCart} />
          </Route>
          <Route path='/cart'>
            <Cart products={cart} />
          </Route>
        </div>
      </main>
    </Router>
  )
}

export default App
