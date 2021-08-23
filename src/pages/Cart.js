function Cart ({ products }) {
  const rows = products.map(product => (
    <tr>
      <th scope='row'>
        <div className='d-flex align-items-center'>
          <img
            src={product.image}
            alt='product.title'
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          <div className='ms-1'>{product.title}</div>
        </div>
      </th>
      <td>{product.quantity}</td>
      <td className='text-end'>€ {product.price}</td>
      <td className='text-end'>€ {product.quantity * product.price}</td>
    </tr>
  ))
  return (
    <>
      <h1>Cart</h1>
      <table className='table mt-5'>
        <thead>
          <tr>
            <th scope='col-6'>Products</th>
            <th scope='col-1'>Quantity</th>
            <th scope='col-3' className='text-end'>
              Price
            </th>
            <th scope='col-2' className='text-end'>
              Subtotal
            </th>
          </tr>
        </thead>
        {rows}
      </table>
    </>
  )
}

export default Cart
