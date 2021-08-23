import Cards from '../Cards'

function Home ({ products, addToCart }) {
  return <Cards items={products} addToCart={addToCart} />
}

export default Home
