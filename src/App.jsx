import React from 'react'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import { CartProvider } from './components/_context'

import './App.scss'

export default function App() {
  return (
    <CartProvider>
      <ProductList />
      <Basket />
    </CartProvider>
  )
}
