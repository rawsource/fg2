import React, { Component } from 'react'
import TriggerStep from './TriggerStep'
import './TriggerController.css'

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
        mouseDownHandler={this.triggerStepMouseDownHandler}
        mouseOverHandler={this.triggerStepMouseOverHandler} />
    )
    return (
      <div className="trigger-controller">
        {triggerSteps}
      </div>
    )
  }
}

export default TriggerController
