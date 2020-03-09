import React, { createContext, useState, useEffect } from 'react'

const storeProducts = [
  {
    id: 1,
    title: 'Švyturys Extra',
    price: 100,
    inCart: false,
    color: 'blue',
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: 'Švyturys Extra Draught',
    price: 4.99,
    inCart: false,
    color: 'red',
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: 'Švyturys Gintarinis',
    price: 2.99,
    inCart: false,
    color: 'green',
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: 'Utenos',
    price: 1,
    inCart: false,
    color: 'blue',
    count: 0,
    total: 0,
  },
]

export const ProductContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, setState] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState([])

  const [filterItems, setFilterItems] = useState([])
  const [itemColor, setItemColor] = useState('empty')

  const getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e])
    return unique
  }

  const handleChangeCourse = e => setItemColor(e.target.value)

  const uniqueCouse = getUnique(filterItems, 'color')
  const filterDropdown = filterItems.filter(({ color }) => color !== itemColor)

  // console.log('state', state)
  console.log('basket', basket)

  const addToCart = e => {
    e.inCart = true
    setBasket(prevState => [...prevState, { ...e, inCart: true }])
  }

  useEffect(() => {
    setState(storeProducts)
    setFilterItems(state)
  })

  const increment = id => {
    const selectedItem = basket.find(item => item.id === id)
    const totalVal = parseFloat((selectedItem.count * selectedItem.price).toFixed(2))
    setBasket(prev => [{ ...prev[0], count: selectedItem.count + 1, total: totalVal }])
  }

  const decrement = id => {
    const selectedItem = basket.find(item => item.id === id)
    selectedItem.count -= 1
    selectedItem.total = parseFloat((selectedItem.count * selectedItem.price).toFixed(2))
    setTotal(prevState => [...prevState, { ...selectedItem }])
  }

  const removeItem = id => {
    setBasket(basket.filter(item => item.id !== id))
    state.filter(item => item.id === id)[0].inCart = false
  }

  return (
    <ProductContext.Provider
      value={{
        children,
        state,
        addToCart,
        basket,
        filterItems,
        getUnique,
        handleChangeCourse,
        uniqueCouse,
        filterDropdown,
        increment,
        decrement,
        removeItem,
        total,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
