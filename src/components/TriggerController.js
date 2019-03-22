import React, { Component } from 'react';
import TriggerStep from './TriggerStep'
import './TriggerController.css';

class TriggerController extends Component {
  triggerStepMouseHandler = (event) => {
    if (event.buttons !== 1) return;
    this.props.setStep(event.target.dataset.step);
  }

  render() {
    const triggerSteps = this.props.steps.map((step) =>
      <TriggerStep
        key={step.num}
        step={step}
        mouseHandler={this.triggerStepMouseHandler} />
    );
    return (
      <div className="trigger-controller">
        {triggerSteps}
      </div>
    );
  }
}

export default TriggerController;
