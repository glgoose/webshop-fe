function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container d-flex'>
        <a className='navbar-brand' href='/'>
          webshop
        </a>
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
        <button className='btn btn-outline-info ms-2 fw-bold'>
          <i class='bi bi-cart'></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
