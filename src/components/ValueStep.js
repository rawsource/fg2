import React, { Component } from 'react';
import './ValueStep.css';

class ValueStep extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  updateStyleMap() {
    const sliderNode = this.sliderRef.current;
    sliderNode.attributeStyleMap.set('--height', this.props.step.val);
  }

  componentDidMount() {
    this.updateStyleMap();
  }
  componentDidUpdate() {
    this.updateStyleMap();
  }

  render() {
    return (
      <div className="ValueStep">
      <div>
        <div className="slider" ref={this.sliderRef}></div>
        <div className="digits">{this.props.step.val}</div>
      </div>
      </div>
    );
  }
}

export default ValueStep;
