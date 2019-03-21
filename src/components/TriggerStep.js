import React, { Component } from 'react';
import './TriggerStep.css';

class TriggerStep extends Component {
  render() {
    let className = 'trigger';
    if (this.props.step.trg === 1) {
      className = `${className} active`;
    }
    return (
      <div className="TriggerStep"
           onMouseDown={this.props.mouseHandler}
           onMouseOver={this.props.mouseHandler}>
        <div className={className} data-step={this.props.step.id}></div>
      </div>
    );
  }
}

export default TriggerStep;
