import React, { Component } from 'react';
import TriggerStep from './TriggerStep'
import './TriggerController.css';

class TriggerController extends Component {
  state = {
    mouseDown: false,
    steps: [
      { id: 0, trg: 0 },
      { id: 1, trg: 0 },
      { id: 2, trg: 0 },
      { id: 3, trg: 0 },
      { id: 4, trg: 0 },
      { id: 5, trg: 0 },
      { id: 6, trg: 0 },
      { id: 7, trg: 0 },
      { id: 8, trg: 0 },
      { id: 9, trg: 0 },
      { id: 10, trg: 0 },
      { id: 11, trg: 0 },
      { id: 12, trg: 0 },
      { id: 13, trg: 0 },
      { id: 14, trg: 0 },
      { id: 15, trg: 0 },
    ]
  };

  setStepState(step) {
    const steps = this.state.steps.slice();
    steps[step].trg = (steps[step].trg === 1) ? 0 : 1;
    this.setState({ steps });
  }

  triggerStepMouseHandler = (event) => {
    if (event.buttons !== 1) {
      return false;
    }
    this.setStepState(event.target.dataset.step);
  }

  render() {
    const triggerSteps = this.state.steps.map((step) =>
      <TriggerStep key={step.id}
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
