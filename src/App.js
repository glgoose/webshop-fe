import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import dummyData from './dummyData.json'

const products = new Map()

dummyData.forEach(item => {
  const { _id: key, ...values } = item
  products.set(key, values)
})

function App () {
  const [cart, setCart] = useState(new Map())

  const addToCart = product => {
    if (cart.has(product)) return console.log('product already in cart')
    const quantity = 1
    setCart(prevState => new Map([...prevState, [product, quantity]]))
  }

  const removeFromCart = product => {
    setCart(prevState => {
      const newState = new Map(prevState)
      newState.delete(product)
      return newState
    })
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
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </div>
      </main>
    </Router>
  )
}

export default App
