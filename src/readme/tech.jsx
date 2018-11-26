import React from 'react'

export default function Tech({ items }) {
  return (
    <div>
      <h3>
        We will be using the following technologies and techniques to build our
        feature/app:
      </h3>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
