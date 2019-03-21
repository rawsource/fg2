import React, { Component } from 'react';
import './TrackParameters.css';

const ItemElement = React.memo((props) => {
  return (
    <div className="item visible">
      {props.group.name}
    </div>
  );
});

class TrackParameters extends Component {
  render() {
    return (
      <div className="track-parameters">
        <ItemElement group={{name: 'VELOCITY'}} />
        <ItemElement group={{name: 'PITCH'}} />
        <ItemElement group={{name: 'SAMPLE START'}} />
        <ItemElement group={{name: 'SAMPLE END'}} />
      </div>
    );
  }
}

export default TrackParameters;
