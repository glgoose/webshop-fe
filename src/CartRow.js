import styles from './CartRow.module.css'
import { FiTrash } from 'react-icons/fi'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

const CartRow = ({ product, quantity, removeFromCart }) => {
  const clickHandler = () => removeFromCart(product)
  // const inputChangeHandler = quantity => updateQuantity(() => quantity)

  return (
    <tr key={product._id} className={styles.row}>
      <th scope='row'>
        <div className='d-flex align-items-center align-middle'>
          <img
            src={product.image}
            alt='product.title'
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          <div className='ms-1'>{product.title}</div>
        </div>
      </th>
      <td className='align-middle'>
        <FiMinusCircle />
        <input
          // onChange={inputChangeHandler}
          type='number'
          min='0'
          value={quantity}
          className='text-center mx-2'
          style={{ width: '4ch' }}
        />
        <FiPlusCircle />
      </td>
      <td className='text-end align-middle'>€ {product.price}</td>
      <td className='text-end align-middle'>€ {quantity * product.price}</td>
      <td className='align-middle text-muted' style={{ width: '1em' }}>
        <FiTrash
          className={`${styles.removeIcon} bi bi-trash`}
          onClick={clickHandler}
        />
      </td>
    </tr>
  )
}

export default CartRow
