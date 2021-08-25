import Card from './Card'

function Cards ({ products, addToCart }) {
  const cards = [...products.entries()].map(([id, product]) => (
    <Card key={id} product={product} addToCart={addToCart} />
  ))

  return (
    <>
      <div className='row mb-2'>
        <div className='col-6'>
          <b>{products.size}</b> results
        </div>
        <div className='col-6 text-end'>Sort: TODO</div>
      </div>
      <div className='d-flex flex-wrap flex-sm-row flex-column justify-content-around'>
        {cards}
      </div>
    </>
  )
}

export default Cards
