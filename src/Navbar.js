import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'

function Navbar ({ itemsInCartCount }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container d-flex align-items-center'>
        <Link to='/' className='navbar-brand'>
          webshop
        </Link>
        <form className='d-flex flex-grow-1'>
          <div className='input-group'>
            <input
              className='form-control flex-grow-1'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-secondary' type='submit'>
              <i className='bi bi-search'></i>
            </button>
          </div>
        </form>
        <div className='d-flex align-items-center position-relative ms-3'>
          <Link to='/cart'>
            <IoCartOutline size='1.5em' color='var(--bs-dark)' />
          </Link>
          <span
            className='position-absolute top-0 start-100 translate-middle bg-primary badge rounded-pill'
            style={{ fontSize: '0.75rem' }}
          >
            {itemsInCartCount}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
