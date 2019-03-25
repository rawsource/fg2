import React, { Component } from 'react'
import './TriggerStep.css'

class TriggerStep extends Component {
  render () {
    let className = 'trigger'
    if (this.props.step) {
      className = `${className} active`
    }
    return (
      <div
        className="TriggerStep"
        onMouseDown={this.props.mouseDownHandler}
        onMouseOver={this.props.mouseOverHandler}>
        <div
          className={className}
          data-step={this.props.index}>
        </div>
      </div>
    )
  }
}

export default TriggerStep
