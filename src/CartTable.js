import CartRow from './CartRow'

function CartTable ({ cart, removeFromCart }) {
  const rows = [...cart.entries()].map(([product, quantity]) => (
    <CartRow
      key={product._id}
      product={product}
      quantity={quantity}
      removeFromCart={removeFromCart}
    />
  ))

  const products = [...cart.keys()]
  const priceTotal = products.reduce((pv, cv) => pv + cv.price, 0)

  return (
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
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td className='text-end'>Total</td>
          <td className='text-end'>€ {priceTotal}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default CartTable
