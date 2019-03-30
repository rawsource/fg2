import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './TrackParameters.module.css'

const Parameter = (props) => {
  const className = classNames({
    [styles.item]: true,
    [styles.active]: props.parameter.active
  })
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
      <div className={styles.TrackParameters}>
        {trackParameters}
      </div>
    )
  }
}

export default TrackParameters
