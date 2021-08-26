import styles from './CartRow.module.css'
import { FiTrash } from 'react-icons/fi'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

const CartRow = ({ product, quantity, cartDispatch }) => {
  const rmClickHandler = () =>
    cartDispatch({ type: 'REMOVE', payload: { product } })

  const inputChangeHandler = e => {
    const quantity = Number(e.target.value)
    cartDispatch({ type: 'UPDATE', payload: { product, quantity } })
  }

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
        <input
          onChange={inputChangeHandler}
          type='number'
          min='0'
          value={quantity}
          className='text-center mx-2'
          style={{ width: '5ch' }}
        />
      </td>
      <td className='text-end align-middle'>€ {product.price}</td>
      <td className='text-end align-middle'>€ {quantity * product.price}</td>
      <td className='align-middle text-muted' style={{ width: '1em' }}>
        <FiTrash
          className={`${styles.removeIcon} bi bi-trash`}
          onClick={rmClickHandler}
        />
      </td>
    </tr>
  )
}

export default CartRow
