import CartTable from '../CartTable'

function Cart ({ cart, cartDispatch }) {
  const isCartEmpty = cart.size === 0

  return (
    <>
      <h1>Cart</h1>
      {isCartEmpty ? (
        <div>No products in card</div>
      ) : (
        <CartTable cart={cart} cartDispatch={cartDispatch} />
      )}
    </>
  )
}

export default Cart
