import React from 'react'
import Tech from './tech'
import Chapters from './chapters'
import Github from './github'

import data from './data'

export default function Readme() {
  const { episodeNumber, title, description, chapters, tech, repoUrl } = data
  return (
    <div>
      <h1>
        {title} - Episode #{episodeNumber}
      </h1>
      <p>{description}</p>

      <Tech items={tech} />
      <Chapters chapters={chapters} />
      <Github repoUrl={repoUrl} />
    </div>
  )
}
