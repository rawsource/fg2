import React, { Component } from 'react';
import TriggerStep from './TriggerStep'
import './TriggerController.css';

class TriggerController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
      steps: [
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
        { id: 16, trg: 0 },
      ]
    };
  }

  // componentDidMount() {
  //   document.addEventListener('mouseup', event => {
  //     this.setState(state => ({
  //       mouseDown: false
  //     }));
  //   })
  // }

  // componentWillUnmount() {
  // }

  toggleSteps(step) {
    const steps = this.state.steps.slice();
    steps[step].trg = (steps[step].trg === 1) ? 0 : 1;
    return steps;
  }

  onTriggerStepMouseDown = (event) => {
    if (event.buttons !== 1) {
      return false;
    }
    const steps = this.toggleSteps(event.target.dataset.step - 1);
    this.setState({ mouseDown: true, steps });
  }

  onTriggerStepMouseOver = (event) => {
    if (event.buttons !== 1) {
      return false;
    }
    if (this.state.mouseDown) {
      const steps = this.toggleSteps(event.target.dataset.step - 1);
      this.setState({ steps });
    }
  }

  render() {
    const triggerSteps = this.state.steps.map((step) =>
      <TriggerStep key={step.id}
                   stepNum={step.id}
                   stepTrg={step.trg}
                   onMouseDown={this.onTriggerStepMouseDown}
                   onMouseOver={this.onTriggerStepMouseOver} />
    );
    return (
      <div className="trigger-controller">
        {triggerSteps}
      </div>
    );
  }
}

export default TriggerController;
