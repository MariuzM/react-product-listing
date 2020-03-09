import React, { useContext } from 'react'
import { ProductContext } from './_context'

export default function Filter() {
  const { filterItems, handleChangeCourse, uniqueCouse } = useContext(ProductContext)

  // const color = [...new Set(state.map(q => q.color))]
  // const test = [...color]
  // console.log(test.toString())
  // console.log(uniqueCouse)

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
