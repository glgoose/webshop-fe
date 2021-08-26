import Button from 'react-bootstrap/Button'
import { IoCartOutline } from 'react-icons/io5'

function CardOverLay ({ product, cartDispatch }) {
  const clickHandler = () => cartDispatch({ type: 'ADD', payload: { product } })

  return (
    <div
      className='overlay position-absolute bg-light w-100 h-75 top-0 start-0 d-flex justify-content-center align-items-center'
      style={{ '--bs-bg-opacity': '.85' }}
    >
      <Button variant='info' size='lg' onClick={clickHandler}>
        + <IoCartOutline size='1.6rem' />
      </Button>
    </div>
  )
}

export default CardOverLay
