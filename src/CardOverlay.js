import Button from 'react-bootstrap/Button'

function CardOverLay () {
  return (
    <div
      className='overlay position-absolute bg-light w-100 h-75 top-0 start-0 d-flex justify-content-center align-items-center' 
			style={{['--bs-bg-opacity']: '.85'}}
    >
      <Button variant='info'> 
        <i class='bi bi-cart-plus'></i>
      </Button>
    </div>
  )
}

export default CardOverLay
