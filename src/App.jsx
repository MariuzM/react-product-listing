import React from 'react'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import Filter from './components/Filter'
import { CartProvider } from './components/_context'

import './App.scss'

export default function App() {
  return (
    <CartProvider>
      <Filter />
      <ProductList />
      <Basket />
    </CartProvider>
  )
}
