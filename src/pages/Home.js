import Cards from '../Cards'

function Home ({ products, cartDispatch }) {
  return <Cards products={products} cartDispatch={cartDispatch} />
}

export default Home
