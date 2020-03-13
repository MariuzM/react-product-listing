import React, { useContext } from 'react'
import { ProductContext } from './_context'

export default function Filter() {
  const { filterItems, handleChangeCourse, uniqueCouse } = useContext(ProductContext)
  return (
    <div>
      <select value={filterItems.title} onChange={handleChangeCourse}>
        {uniqueCouse.map(c => {
          return (
            <option key={c.id} value={c.color}>
              {c.color}
            </option>
          )
        })}
      </select>
    </div>
  )
}
