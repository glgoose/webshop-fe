import Card from './Card'

function Cards ({ sortedProducts, cartDispatch }) {
  const cards = sortedProducts.map(product => (
    <Card key={product._id} product={product} cartDispatch={cartDispatch} />
  ))

  return (
    <div className='d-flex flex-wrap flex-sm-row flex-column justify-content-around'>
      {cards}
    </div>
  )
}

export default Cards
