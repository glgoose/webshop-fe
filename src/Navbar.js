import { Link } from 'react-router-dom'
import { IoCartOutline, IoSearch, IoPersonCircleOutline } from 'react-icons/io5'
import { useState } from 'react'

function Navbar ({ itemsInCartCount, onSearch }) {
  const [query, setQuery] = useState('')

  const inputHandler = e => {
    const val = e.target.value
    setQuery(() => val)
  }

  const searchHandler = e => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container d-flex align-items-center'>
        <Link to='/' className='navbar-brand'>
          webshop
        </Link>
        <form className='d-flex flex-grow-1' onSubmit={searchHandler}>
          <div className='input-group'>
            <input
              className='form-control flex-grow-1'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onInput={inputHandler}
            />
            <button className='btn btn-outline-secondary' type='submit'>
              <IoSearch size='1.3rem' />
            </button>
          </div>
        </form>
        <Link to='/dashboard' className='ms-3'>
          <IoPersonCircleOutline color='var(--bs-dark' size='1.7em' />
        </Link>
        <Link to='/cart' className='ms-2'>
          <div className='d-flex align-items-center position-relative'>
            <IoCartOutline size='1.5em' color='var(--bs-dark)' />
            <span
              className='position-absolute top-0 start-100 translate-middle bg-primary badge rounded-pill'
              style={{ fontSize: '0.75rem' }}
            >
              {itemsInCartCount}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
