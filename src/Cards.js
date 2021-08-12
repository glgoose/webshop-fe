import Card from './Card'

function Cards ({ items }) {
  console.log(items)
  const cards = items.map(item => <Card item={item} />)

  return (
    <div className='container'>
      <div className='d-flex flex-wrap flex-sm-row flex-column'>{cards}</div>
    </div>
  )
}

export default Cards
