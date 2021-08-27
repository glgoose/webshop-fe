import Cards from '../Cards'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useState, useEffect, useMemo } from 'react'

function shuffleArray (arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const sortByFields = {
  RANDOM: 'Random',
  PRICE_ASC: 'Price: Low to High',
  PRICE_DESC: 'Price: High to Low'
}

function Home ({ products, cartDispatch }) {
  const [sortBy, setSort] = useState(sortByFields.RANDOM)

  useEffect(() => console.log(sortBy), [sortBy])

  const sortedProducts = useMemo(() => {
    const sortedProducts = [...products.values()]

    switch (sortBy) {
      case sortByFields.PRICE_ASC:
        return sortedProducts.sort((pv, cv) => pv.price - cv.price)
      case sortByFields.PRICE_DESC:
        return sortedProducts.sort((pv, cv) => cv.price - pv.price)
      case sortByFields.RANDOM:
        return shuffleArray(sortedProducts)
      default:
    }
  }, [products, sortBy])

  return (
    <>
      <div className='row mb-2'>
        <div className='col-6'>
          <b>{products.size}</b> results
        </div>
        <div className='col-6 text-end d-flex justify-content-end align-items-center'>
          Sort:
          <DropdownButton
            id='dropdown-basic-button'
            variant='light'
            title={sortBy}
            className='ms-2'
          >
            <Dropdown.Item onClick={() => setSort(() => sortByFields.RANDOM)}>
              {sortByFields.RANDOM}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSort(() => sortByFields.PRICE_ASC)}
            >
              {sortByFields.PRICE_ASC}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSort(() => sortByFields.PRICE_DESC)}
            >
              {sortByFields.PRICE_DESC}
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <Cards sortedProducts={sortedProducts} cartDispatch={cartDispatch} />
    </>
  )
}

export default Home
