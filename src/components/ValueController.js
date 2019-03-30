import React, { Component } from 'react'
import ValueStep from './ValueStep'
import styles from './ValueController.module.css'

class ValueController extends Component {
  minY = 0
  maxY = 127

  mouseDownHandler = (event) => {
    if (event.buttons !== 1) return
    this.update(event.target.dataset.step, event.nativeEvent.offsetY)
  }

  mouseMoveHandler = (event) => {
    if (event.buttons !== 1) return
    this.update(event.target.dataset.step, event.nativeEvent.offsetY)
  }

  mouseOutHandler = (event) => {
    if (event.buttons !== 1) return
    if (event.nativeEvent.offsetY > this.maxY) {
      this.update(event.target.dataset.step, this.maxY)
    }
    if (event.nativeEvent.offsetY < this.minY) {
      this.update(event.target.dataset.step, this.minY)
    }
  }

  wheelHandler = (event) => {
    const step = event.target.dataset.step
    const val = this.props.values[step].val
    const offset = (event.deltaY < 0) ? 1 : -1
    this.update(step, this.maxY - (val + offset))
  }

  update (step, val) {
    val = Math.min(Math.max(val, this.minY), this.maxY)
    this.props.setValue(step, this.maxY - val)
  }

  render () {
    const valueSteps = this.props.values.map((val, index) =>
      <ValueStep
        key={index}
        val={val}
        index={index}
        mouseDownHandler={this.mouseDownHandler}
        mouseMoveHandler={this.mouseMoveHandler}
        mouseOutHandler={this.mouseOutHandler}
        wheelHandler={this.wheelHandler} />
    )
    return (
      <div className={styles.ValueController}>
        {valueSteps}
      </div>
    )
  }
}

export default ValueController
