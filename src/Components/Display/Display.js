import React from 'react'

const Display = (props) => {
  return (
    <div className='Display'>
      <p>{props.previous}</p>
      <p>{props.atual}</p>
    </div>
  )
}

export default Display
