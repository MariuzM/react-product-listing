import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import { ProductContext } from './_context'

export default function ProductList() {
  const { filterDropdown, addToCart } = useContext(ProductContext)
  return (
    <div className="cardBox">
      {filterDropdown.map(data => {
        const { id, title, price, color, inCart } = data
        return (
          <div className="card card-1" key={id}>
            {title}
            {price}
            {color}
            <Button disabled={!!inCart} onClick={() => addToCart(data)}>
              {inCart ? <i>In Cart</i> : <i>Buy</i>}
            </Button>
          </div>
        )
      })}
    </div>
  )
}
