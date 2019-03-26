import React, { Component } from 'react'
import classNames from 'classnames'
import './TriggerStep.css'

class TriggerStep extends Component {
  render () {
    const className = classNames({
      trigger: true,
      active: this.props.step
    })
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
