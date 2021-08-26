import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useReducer } from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import dummyData from './dummyData.json'

const products = new Map()

dummyData.forEach(item => products.set(item._id, item))

function cartReducer (cart, { type, payload }) {
  let { product, quantity } = payload

  const updateQuantity = (cart, callback) => {
    const prevQuantity = new Map(cart).get(product)
    const newQuantity = callback(prevQuantity)
    return new Map(cart).set(product, newQuantity)
  }

  switch (type) {
    case 'ADD':
      if (cart.has(product))
        return updateQuantity(cart, prevQuantity => prevQuantity + 1)

      const initQuantity = 1
      return new Map([...cart, [product, initQuantity]])
    case 'REMOVE':
      const newCart = new Map(cart)
      newCart.delete(product)
      return newCart
    case 'UPDATE':
      return updateQuantity(cart, () => quantity)
    default:
      throw new Error()
  }
}

function App () {
  const [cart, cartDispatch] = useReducer(cartReducer, new Map())

  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='container my-4'>
          <Route exact path='/'>
            <Home products={products} cartDispatch={cartDispatch} />
          </Route>
          <Route path='/cart'>
            <Cart cart={cart} cartDispatch={cartDispatch} />
          </Route>
        </div>
      </main>
    </Router>
  )
}

export default App
