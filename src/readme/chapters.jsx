import React from 'react'

export default function Chapters({ branches }) {
  return (
    <div>
      <h3>This episode has been divided into chapters using git-banches:</h3>

      <ul>
        {branches.map((branch) => (
          <li key={branch}>{branch}</li>
        ))}
      </ul>
    </div>
  )
}
