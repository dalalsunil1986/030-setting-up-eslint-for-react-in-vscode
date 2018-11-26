import React from 'react'

export default function Chapters({ chapters }) {
  return (
    <div>
      <h3>This episode has been divided into chapters using git-banches:</h3>

      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {chapters.map((chapter) => {
          const { branch, timestamp, link } = chapter
          return (
            <li key={branch}>
              - {timestamp} [<a href={link}>{branch}]</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
