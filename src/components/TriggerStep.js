import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './TriggerStep.module.css'

class TriggerStep extends Component {
  render () {
    const className = classNames({
      [styles.trigger]: true,
      [styles.active]: this.props.step,
      [styles.highlight]: this.props.highlight
    })
    return (
      <div
        className={styles.TriggerStep}
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
