import React from 'react'
import styles from './Product.module.scss'
import { useCart } from '../contexts/use-cart'

export default function Product ({ product }) {
  //const {addItem, removeItem, findItem}= useuseCart()
  const { addItem, countItemsInCart, removeItem } = useCart()
  return (
    <div className={styles.card1}>
      <div className={styles.relativeWrapper1}>
        <img
          alt='pizzaPhoto'
          className={styles.pizzaPhoto}
          src={product.image_url}
        />
        <div className={styles.infoIcon}>
          <img
            alt='vector'
            className={styles.vector}
            src='https://static.overlay-tech.com/assets/296844ae-09a4-4ada-b494-edd64961e028.svg'
          />
        </div>
      </div>
      <p className={styles.pepperonipizza}>{product.name}</p>
      <p className={styles.description}>
        Premium pepperoni and cheese is made with real mozzarella on original
        hand-tossed crust.
      </p>
      <div className={styles.info}>
        <p className={styles.cal}>265 Cal</p>
        <p className={styles.cal}>P/F/C: 12/10/31</p>
        <p className={styles.cal}>53.8 °C</p>
      </div>
      <div className={styles.flexWrapper1}>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.discount}>$29.90</p>
      </div>
      <div className={styles.flexWrapper2}>
        {countItemsInCart(product.sku) > 0 ? (
          <button
            className={styles.orderButton}
            style={{ backgroundColor: 'red' }}
            onClick={() => removeItem(product.sku)}
          >
            <p className={styles.buttontext}>REMOVE</p>
          </button>
        ) : (
          <div />
        )}
        <button
          className={styles.orderbutton}
          onClick={() => addItem(product.sku)}
        >
          <p className={styles.buttontext}>
            ADD TO CART({countItemsInCart(product.sku)})
          </p>
        </button>
      </div>
    </div>
  )
}
