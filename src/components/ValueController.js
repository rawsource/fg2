import React, { Component } from 'react';
import ValueStep from './ValueStep'
import './ValueController.css';

class ValueController extends Component {
  render() {
    const valueSteps = this.props.parameters.map((step) =>
      <ValueStep
        key={step.num}
        step={step} />
    );
    return (
      <div className="value-controller">
        {valueSteps}
      </div>
    );
  }
}

export default ValueController;
