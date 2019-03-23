import React, { Component } from 'react';
import ValueStep from './ValueStep'
import './ValueController.css';

class ValueController extends Component {

  minY = 0
  maxY = 127

  mouseDownHandler = (event) => {
    if (event.buttons !== 1) return;
    this.update(event.target.dataset.step, event.nativeEvent.offsetY);
  }

  mouseOutHandler = (event) => {
    if (event.buttons !== 1) return;
    if (event.nativeEvent.offsetY > this.maxY) {
      this.update(event.target.dataset.step, this.maxY);
    }
    if (event.nativeEvent.offsetY < this.minY) {
        this.update(event.target.dataset.step, this.minY);
    }
  }

  mouseMoveHandler = (event) => {
    if (event.buttons !== 1) return;
    this.update(event.target.dataset.step, event.nativeEvent.offsetY);
  }

  update (step, val) {
    val = Math.min(Math.max(val, this.minY), this.maxY);
    this.props.setParameter(step, this.maxY - val);
  }

  render() {
    const valueSteps = this.props.parameters.map((step) =>
      <ValueStep
        key={step.num}
        step={step}
        mouseDownHandler={this.mouseDownHandler}
        mouseOutHandler={this.mouseOutHandler}
        mouseMoveHandler={this.mouseMoveHandler} />
    );
    return (
      <div className="value-controller">
        {valueSteps}
      </div>
    );
  }
}

export default ValueController;
