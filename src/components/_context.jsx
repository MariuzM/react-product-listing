import React, { createContext, useState, useEffect } from 'react'

const storeProducts = [
  {
    id: 1,
    title: 'Švyturys Extra',
    price: 100,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: 'Švyturys Extra Draught',
    price: 4.99,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: 'Švyturys Gintarinis',
    price: 2.99,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: 'Utenos',
    price: 2.99,
    inCart: false,
    count: 0,
    total: 0,
  },
]

export const ProductContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, setState] = useState([])
  const [basket, setBasket] = useState([])

  console.log('state', state)
  console.log('basket', basket)

  const addToCart = e => {
    const tempBasket = e
    tempBasket.inCart = true
    setBasket(prevState => [...prevState, tempBasket])
  }

  useEffect(() => {
    setState(storeProducts)
  }, [state])

  return (
    <ProductContext.Provider
      value={{
        state,
        addToCart,
        basket,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
