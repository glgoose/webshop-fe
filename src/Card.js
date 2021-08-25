import CardOverlay from './CardOverlay'
import './Card.css'

function Card ({ product, cartDispatch }) {
  return (
    <div className='card my-2' style={{ width: '15rem', height: '25rem' }}>
      <CardOverlay product={product} cartDispatch={cartDispatch} />
      <img
        className='card-img-top img-fluid h-75'
        style={{ objectFit: 'contain', maxWidth: '100%' }}
        src={product.image}
        alt={product.title}
      />
      <div className='card-body'>
        <p className='card-title h6 truncate' style={{ height: '2.3em' }}>
          {product.title}
        </p>
        <p className='card-text'>€ {product.price}</p>
      </div>
    </div>
  )
}

export default Card
