import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useState, useEffect, useReducer } from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

// import dummyData from './dummyData.json'
// const products = new Map()
// dummyData.forEach(item => products.set(item._id, item))

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
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState(new Map())

  const [cart, cartDispatch] = useReducer(cartReducer, new Map())

  const [loginSuccessMsg, setLoginSuccessMsg] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [user, setUser] = useState({})

  const quantities = [...cart.values()]
  const itemsInCartCount = quantities.reduce((total, cv) => total + cv, 0)

  useEffect(() => {
    fetch('https://webshop-rest-api.herokuapp.com/products')
      .then(res => res.json())
      .then(
        items => {
          const products = new Map()
          items.forEach(item => products.set(item._id, item))
          setIsLoaded(true)
          setProducts(products)
        },
        err => {
          setIsLoaded(true)
          setError(err)
        }
      )
  }, [])

  const successMsgHandler = msg => setLoginSuccessMsg(msg)

  const loggedIn = user => {
    setIsLoggedIn(true)
    setUser(user)
  }

  return (
    <Router>
      <header>
        <Navbar itemsInCartCount={itemsInCartCount} />
      </header>

      <main>
        <div className='container my-4'>
          <Route exact path='/'>
            <Home
              products={products}
              isLoaded={isLoaded}
              error={error}
              cartDispatch={cartDispatch}
            />
          </Route>
          <Route path='/cart'>
            <Cart cart={cart} cartDispatch={cartDispatch} />
          </Route>
          <Route path='/login'>
            <Login loginSuccessMsg={loginSuccessMsg} loggedIn={loggedIn} />
          </Route>
          <Route path='/register'>
            <Register successMsgHandler={successMsgHandler} />
          </Route>
          <Route path='/dashboard'>
            {isLoggedIn ? (
              <Dashboard
                user={user}
                successMsgHandler={successMsgHandler}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
        </div>
      </main>
    </Router>
  )
}

export default App
