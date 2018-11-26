import React from 'react'

export default function Github({ repoUrl }) {
  const url = `https://github.com/react-u/${repoUrl}`
  return (
    <div>
      <h4>The source code for this episode can be found at</h4>
      <a href={url}>{url}</a>
    </div>
  )
}
