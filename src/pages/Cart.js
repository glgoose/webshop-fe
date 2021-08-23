function Cart () {
  return (
    <>
      <h1>Cart</h1>
      <table className='table mt-5'>
        <thead>
          <tr>
            <th scope='col-6'>Products</th>
            <th scope='col-1'>Quantity</th>
            <th scope='col-3'>Price</th>
            <th scope='col-2'>Subtotal</th>
          </tr>
        </thead>
      </table>
    </>
  )
}

export default Cart
