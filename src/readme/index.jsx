import React from 'react'
import Tech from './tech'
import Chapters from './chapters'
import Github from './github'

import data from './data'

export default function Readme() {
  const { episodeNumber, title, description, chapters, tech, repoUrl } = data
  return (
    <div>
      <h1>ReactU Episode #{episodeNumber}</h1>
      <h2>{title}</h2>
      <p>{description}</p>

      <Tech items={tech} />
      <Chapters branches={chapters} />
      <Github repoUrl={repoUrl} />
    </div>
  )
}
