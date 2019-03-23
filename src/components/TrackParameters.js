import React, { Component } from 'react';
import './TrackParameters.css';

const ItemElement = React.memo((props) => {
  let className = 'item visible';
  if (props.group.active) {
    className = `${className} active`;
  }
  return (
    <div className={className}>
      {props.group.name}
    </div>
  );
});

class TrackParameters extends Component {
  render() {
    return (
      <div className="track-parameters">
        <ItemElement group={{name: 'VELOCITY', active: true}} />
        <ItemElement group={{name: 'PITCH'}} />
        <ItemElement group={{name: 'SAMPLE START'}} />
        <ItemElement group={{name: 'SAMPLE END'}} />
      </div>
    );
  }
}

export default TrackParameters;
