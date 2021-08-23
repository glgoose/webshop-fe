import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import products from './dummyData.json'

function App () {
  // const [cart, setCart] = useState([])

  const addToCart = id => console.log('add to cart: ' + id)
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <Route path='/'>
        <Home products={products} addToCart={addToCart} />
      </Route>
    </Router>
  )
}

export default App
