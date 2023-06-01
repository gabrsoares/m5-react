import React from 'react'

export default function Display(props) {
  return (
    <div className='Display'>
      <p>{props.previous}</p>
      <p>{props.atual}</p>
    </div>
  )
}
