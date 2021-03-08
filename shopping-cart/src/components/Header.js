import React, { useState, useRef } from 'react'
import styles from './Product.module.scss'
import useOnClickOutside from 'use-onclickoutside'
import { useCart } from '../contexts/use-cart'
import Cart from './Cart'

export default function Header () {
  const { cart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => {
    if (isOpen === true) setIsOpen(false)
  })
  return (
    <div className={styles.container}>
      <div className={styles.cart_btn}>
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
          <img src='./cart.png' width='30' />({cart.length})
        </button>

        <div
          ref={modalRef}
          className={styles.cart_modal}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <Cart />
        </div>
      </div>
    </div>
  )
}
