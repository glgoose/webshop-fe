import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import products from './dummyData.json'

function App () {
  // const [cart, setCart] = useState([])

  const addToCart = id => console.log('add to cart: ' + id)
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
            <Cart />
          </Route>
        </div>
      </main>
    </Router>
  )
}

export default App
