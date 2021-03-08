import React from 'react'
import { useCart } from '../contexts/use-cart'
import Product from './Product'
import styles from './Product.module.scss'

export default function Cart () {
  const { cartGroupedByItems, addItem, removeItem, totalPrice } = useCart()

  return (
    <div className={styles.cartContainer}>
      {cartGroupedByItems.map((product, index) => (
        <div className='cart_item' key={index}>
          <img src={product.image_url} alt={product.name} width='80px' />
          <div className='content'>
            <h3></h3>
            <div className='cart_btns'>
              <button onClick={() => removeItem(product.sku)}>-</button>
              <button>{product.quantity}</button>
              <button onClick={() => addItem(product.sku)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className='total'>${totalPrice}</div>
    </div>
  )
}
