function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container d-flex'>
        <a className='navbar-brand' href='#'>
          webshop
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse flex-grow-1'
          id='navbarSupportedContent'
        >
          <form className='d-flex w-100'>
            <input
              className='form-control me-2 flex-grow-1'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
