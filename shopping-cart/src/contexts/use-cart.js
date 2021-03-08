import React, { useContext, createContext, useReducer } from 'react'
import products from '../Products'
const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const initialState = { cart: [] }
//reducer
function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, products.find(product => product.sku === payload)]
      }
    case 'REMOVE':
      const indexInCart = state.cart.findIndex(
        product => product.sku === payload
      )

      const newCart = [...state.cart]
      //console.log('before splice', newCart)
      newCart.splice(indexInCart, 1)
      //  console.log('after splice', newCart)

      return { ...state, cart: newCart }

    case 'EMPTY':
      return { cart: [] }
    default:
      return state
  }
}

//context
export function CartProvider ({ children }) {
  const addItem = sku => dispatch({ type: 'ADD', payload: sku })
  const removeItem = sku => dispatch({ type: 'REMOVE', payload: sku })
  const emptyCart = () => dispatch({ type: 'EMPTY' })
  function totalPrice () {
    return groupCartItems().reduce((totalPrice, product) => {
      return totalPrice + product.price * product.quantity
    }, 0)
  }

  function countItemsInCart (sku) {
    const itemsInCart = state.cart.filter(product => product.sku === sku) ?? []
    console.log('length is', itemsInCart.length)
    return itemsInCart.length
  }

  function groupCartItems () {
    return state.cart.reduce((newCart, product) => {
      const indexInCart = newCart.findIndex(p => p.sku === product.sku)
      const isInCart = indexInCart !== -1

      if (isInCart) {
        newCart[indexInCart].quantity = newCart[indexInCart].quantity + 1
        return newCart
      }

      newCart.push({ ...product, quantity: 1 })
      return newCart
    }, [])
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider
      value={{
        message: 'hello',
        addItem: addItem,
        removeItem: removeItem,
        emptyCart,
        cartGroupedByItems: groupCartItems(),
        countItemsInCart,
        cart: state.cart,
        totalPrice: totalPrice()
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
