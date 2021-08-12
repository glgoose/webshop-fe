import './App.css'
import Navbar from './Navbar'
import Cards from './Cards'
import products from './dummyData.json'

function App () {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Cards items={products} />
      </main>
    </>
  )
}

export default App
