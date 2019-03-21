import React, { Component } from 'react';
import TriggerStep from './TriggerStep'
import './TriggerController.css';

class TriggerController extends Component {
  state = {
    mouseDown: false,
    steps: [
      { num: 0, trg: false },
      { num: 1, trg: false },
      { num: 2, trg: false },
      { num: 3, trg: false },
      { num: 4, trg: false },
      { num: 5, trg: false },
      { num: 6, trg: false },
      { num: 7, trg: false },
      { num: 8, trg: false },
      { num: 9, trg: false },
      { num: 10, trg: false },
      { num: 11, trg: false },
      { num: 12, trg: false },
      { num: 13, trg: false },
      { num: 14, trg: false },
      { num: 15, trg: false }
    ]
  };

  setStepState(step) {
    // probably because i use triggerStepMouseHandler for two different events
    // that step can be undefined
    if (step === undefined) return;

    const steps = this.state.steps.slice();
    steps[step].trg = !steps[step].trg;
    this.setState({ steps });
  }

  triggerStepMouseHandler = (event) => {
    if (event.buttons !== 1) return;
    this.setStepState(event.target.dataset.step);
  }

  render() {
    const triggerSteps = this.state.steps.map((step) =>
      <TriggerStep key={step.num}
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
