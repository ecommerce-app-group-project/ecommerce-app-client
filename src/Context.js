import React from 'react'
import { createContext, useState } from 'react'

export const Cart = createContext()
const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  return (
    <Cart.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Cart.Provider>
  )
}

export default Context
