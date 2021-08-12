import Card from './Card'

function Cards ({ items }) {
  console.log(items)
  const cards = items.map(item => <Card item={item} />)

  return (
    <div className='container my-4'>
      <div className='d-flex flex-wrap flex-sm-row flex-column justify-content-around'>
        {cards}
      </div>
    </div>
  )
}

export default Cards
