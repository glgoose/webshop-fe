import Card from './Card'

function Cards ({ items, addToCart }) {
  console.log(items)
  const cards = items.map(item => (
    <Card key={item._id} id={item._id} item={item} addToCart={addToCart} />
  ))

  return (
    <>
      <div className='row mb-2'>
        <div className='col-6'>
          <b>{items.length}</b> results
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
