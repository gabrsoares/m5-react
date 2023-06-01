import React from 'react'

class Button extends React.Component {
    render(){
        return (
          <div className='Button' onClick={this.props.onClick}>{this.props.value}</div>
        )
    }
}

export default Button
