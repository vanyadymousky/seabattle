import React from 'react'
import './battlefield.scss'
import { Cell } from './cell/cell'

export function Battlefield() {
  return (
    <main>
      <div className="player-name">Name</div>
      <div className="battlefield">
        <Cell isBleeding />
        <Cell isShot />
      </div>
    </main>
  )
}
