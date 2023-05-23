import React from 'react'

class Button extends React.Component {
    render(){
        return (
          <div className='Button'>{this.props.value}</div>
        )
    }
}

export default Button
