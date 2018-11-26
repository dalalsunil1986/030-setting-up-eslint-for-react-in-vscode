import React from 'react'
import Tech from './tech'
import Chapters from './chapters'
import Github from './github'

export default function Readme() {
  return (
    <div>
      <h1>ReactU Episode #...</h1>
      <h2>Eposide Title</h2>
      <p>Description</p>

      <Tech />
      <Chapters />
      <Github />
    </div>
  )
}
