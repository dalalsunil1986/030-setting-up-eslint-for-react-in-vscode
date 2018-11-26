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
          const { branch, timestamp } = chapter
          return (
            <li key={branch}>
              - {timestamp} [
              <a
                href={`https://github.com/react-u/030-setting-up-eslint-for-react-in-vscode/tree/${branch}`}
              >
                {branch}]
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
