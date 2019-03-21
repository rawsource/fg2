import React, { Component } from 'react';
import './ValueStep.css';

class ValueStep extends Component {
  render() {
    return (
      <div className="ValueStep">
      <div>
        <div className="slider"></div>
        <div className="digits">0</div>
      </div>
      </div>
    );
  }
}

export default ValueStep;
