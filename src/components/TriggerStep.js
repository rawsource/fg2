import React, { Component } from 'react';
import './TriggerStep.css';

class TriggerStep extends Component {
  render() {
    let className = 'trigger';
    if (this.props.stepTrg === 1) {
      className += ' active'
    }
    return (
      <div className="TriggerStep"
           onMouseDown={this.props.onMouseDown}
           onMouseOver={this.props.onMouseOver}>
        <div className={className} data-step={this.props.stepNum}></div>
      </div>
    );
  }
}

export default TriggerStep;

