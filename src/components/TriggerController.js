import React, { Component } from 'react';
import TriggerStep from './TriggerStep'
import './TriggerController.css';

class TriggerController extends Component {
  setStepState(step) {
    // probably because i use triggerStepMouseHandler for two different events
    // that step can be undefined
    if (step === undefined) return;

    const steps = this.props.steps.slice();
    steps[step].trg = !steps[step].trg;
    this.setState({ steps });
  }

  triggerStepMouseHandler = (event) => {
    if (event.buttons !== 1) return;
    this.setStepState(event.target.dataset.step);
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
