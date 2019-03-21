import React, { Component } from 'react';
import './ValueStep.css';

class ValueStep extends Component {
  render() {
    return (
      <div className="ValueStep">
      <div>
        <div class="slider"></div>
        <div class="digits">0</div>
      </div>
      </div>
    );
  }
}

export default ValueStep;
