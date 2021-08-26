import CartRow from './CartRow'

function CartTable ({ cart, cartDispatch }) {
  const rows = [...cart.entries()].map(([product, quantity]) => (
    <CartRow
      key={product._id}
      product={product}
      quantity={quantity}
      cartDispatch={cartDispatch}
    />
  ))

  const subtotals = [...cart.entries()].map(
    ([product, quantity]) => product.price * quantity
  )
  const priceTotal = subtotals.reduce((total, cv) => total + cv, 0)

  return (
    <table className='table mt-4'>
      <thead>
        <tr>
          <th scope='col' className='col-9'>
            Products
          </th>
          <th scope='col'>Quantity</th>
          <th scope='col' className='text-end'>
            Subtotal
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot>
        <tr className='bg-light'>
          <td />
          <td className='text-end fw-bold'>Total</td>
          <td className='text-end fw-bold'>€ {priceTotal}</td>
          <td />
        </tr>
      </tfoot>
    </table>
  )
}

export default CartTable
