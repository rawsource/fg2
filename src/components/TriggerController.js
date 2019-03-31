import React, { Component } from 'react'
import TriggerStep from './TriggerStep'
import styles from './TriggerController.module.css'

class TriggerController extends Component {
  initialTrg = false;

  triggerStepMouseDownHandler = (event) => {
    if (event.buttons !== 1) return
    this.initialTrg = this.props.setStep(event.target.dataset.step, undefined)
  }

  triggerStepMouseOverHandler = (event) => {
    if (event.buttons !== 1) return
    this.props.setStep(event.target.dataset.step, this.initialTrg)
  }

  render () {
    const triggerSteps = this.props.steps.map((step, index) =>
      <TriggerStep
        key={index}
        step={step}
        index={index}
        highlight={index === this.props.step}
        mouseDownHandler={this.triggerStepMouseDownHandler}
        mouseOverHandler={this.triggerStepMouseOverHandler} />
    )
    return (
      <div className={styles.TriggerController}>
        {triggerSteps}
      </div>
    )
  }
}

export default TriggerController
