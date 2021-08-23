import Cards from './Cards'

function Home ({ products, addToCart }) {
  return (
    <main>
      <Cards items={products} addToCart={addToCart} />
    </main>
  )
}

export default Home
