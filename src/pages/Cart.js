import CartTable from '../CartTable'

function Cart ({ cart, removeFromCart }) {
  const isCartEmpty = cart.size === 0

  return (
    <>
      <h1>Cart</h1>
      {isCartEmpty && <div>No products in card</div>}
      {!isCartEmpty && (
        <CartTable cart={cart} removeFromCart={removeFromCart} />
      )}
    </>
  )
}

export default Cart
