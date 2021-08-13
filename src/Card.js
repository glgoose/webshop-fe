import CardOverlay from './CardOverlay'
import { useState } from 'react'

function Card ({ item }) {
  const { title, image, price } = item
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div onMouseOver={toggleVisibility} onMouseOut={toggleVisibility} className='card my-2' style={{ width: '15rem', height: '25rem' }}>
      <CardOverlay isVisible={isVisible} />
      <img
        className='card-img-top img-fluid h-75'
        style={{ objectFit: 'contain', maxWidth: '100%' }}
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
