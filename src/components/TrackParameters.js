import React, { Component } from 'react'
import './TrackParameters.css'

const Parameter = (props) => {
  let className = 'item'
  if (props.parameter.active) {
    className = `${className} active`
  }
  return (
    <div
      className={className}
      onMouseDown={props.mouseDownHandler}
      data-parameter={props.parameter.id}>
      {props.parameter.name}
    </div>
  )
}

class TrackParameters extends Component {
  parameterMouseDownHandler = (event) => {
    if (event.buttons !== 1) return
    this.props.setParameter(event.target.dataset.parameter)
  }

  render () {
    const trackParameters = this.props.parameters.map((parameter) =>
      <Parameter
        key={parameter.id}
        parameter={parameter}
        mouseDownHandler={this.parameterMouseDownHandler} />
    )
    return (
      <div className="track-parameters">
        {trackParameters}
      </div>
    )
  }
}

export default TrackParameters
