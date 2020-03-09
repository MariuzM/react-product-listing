import React from 'react'

export default function BasketFull({ value }) {
  return (
    <div className="cardBox">
      {value.map(data => {
        const { id, title, price } = data
        return (
          <div key={id} price={price} value={value}>
            {title}
          </div>
        )
      })}
    </div>
  )
}
