import React, { useContext } from 'react'
import { ProductContext } from './_context'
import BasketEmpty from './BasketEmpty'
import BasketFull from './BasketFull'

export default function Basket() {
  const { basket } = useContext(ProductContext)
  console.log()
  return <div>{basket.length > 0 ? <BasketFull value={basket} /> : <BasketEmpty />}</div>
}
