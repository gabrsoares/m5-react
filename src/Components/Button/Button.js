import React from 'react'

const Button = (props) => {
  return (
    <div className='Button' onClick={props.onClick}>{props.value}</div>
  )
    
}

export default Button
