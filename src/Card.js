function Card ({ item }) {
  const { title, image, price } = item

  return (
    <div className='card my-2' style={{ width: '15rem', height: '25rem' }}>
      <img
        className='card-img-top img-fluid h-75'
        style={{ 'object-fit': 'contain', 'max-width': '100%' }}
        src={image}
        alt={title}
      />
      <div className='card-body'>
        <p className='card-title h6 truncate' style={{ height: '2.3em' }}>
          {title}
        </p>
        <p className='card-text'>€ {price}</p>
      </div>
    </div>
  )
}

export default Card
