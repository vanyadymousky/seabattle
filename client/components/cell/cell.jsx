import React from 'react'
import classNames from 'classnames';
import './cell.scss'

export function Cell({ isShot, isBleeding, isDead }) {
  return <div className={classNames('cell', {
      'shot': isShot,
      'bleeding': isBleeding,
      'dead': isDead,
    })}
  />;
}
