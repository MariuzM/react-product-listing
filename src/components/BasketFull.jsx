import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { ProductContext } from './_context'

export default function BasketFull({ value }) {
  const { increment, decrement, removeItem } = useContext(ProductContext)

  return (
    <div className="cardBox">
      {value.map(data => {
        const { id, title, price, count, total } = data
        return (
          <Box className="card card-1" key={id}>
            <div>
              <span>{title}</span>
            </div>
            <div>
              <span>{price}</span>
            </div>
            <span>
              <Button onClick={() => increment(id)}>+</Button>
            </span>
            <span>
              <div>{count}</div>
            </span>
            <span>
              <Button onClick={() => decrement(id)}>-</Button>
            </span>
            <div>
              <Button onClick={() => removeItem(id)}>Remove Item</Button>
            </div>
            <div>
              <strong>{`Item Total: ${total}`}</strong>
            </div>
          </Box>
        )
      })}
    </div>
  )
}
