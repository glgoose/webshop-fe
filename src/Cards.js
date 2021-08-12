import Card from './Card'

function Cards ({ items }) {
  console.log(items)
  const cards = items.map(item => <Card item={item} />)

  return (
    <div className='container my-4'>
      <div className='row mb-2'>
        <div className='col-6'>
          <b>{items.length}</b> results
        </div>
        <div className='col-6 text-end'>Sort: TODO</div>
      </div>
      <div className='d-flex flex-wrap flex-sm-row flex-column justify-content-around'>
        {cards}
      </div>
    </div>
  )
}

export default Cards
