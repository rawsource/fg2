import React, { Component } from 'react';
import './ValueStep.css';

class ValueStep extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  setAttributeStyleMap() {
    const sliderNode = this.sliderRef.current;
    sliderNode.attributeStyleMap.set('--height', this.props.val);
  }

  componentDidMount() {
    this.setAttributeStyleMap();
  }

  componentDidUpdate() {
    this.setAttributeStyleMap();
  }

  render() {
    return (
      <div className="ValueStep">
      <div>
        <div
          className="slider"
          ref={this.sliderRef}
          onMouseDown={this.props.mouseDownHandler}
          onMouseMove={this.props.mouseMoveHandler}
          onMouseOut={this.props.mouseOutHandler}
          onWheel={this.props.wheelHandler}
          data-step={this.props.index}>
        </div>
        <div className="digits">{this.props.val}</div>
      </div>
      </div>
    );
  }
}

export default ValueStep;
