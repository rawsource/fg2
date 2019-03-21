import React, { Component } from 'react';
import './ParameterGroups.css';

const ItemElement = React.memo((props) => {
  return (
    <div className="item">
      {props.group.name}
    </div>
  );
});

class ParameterGroups extends Component {
  render() {
    return (
      <div className="ParameterGroups">
      <div className="parameter-groups">
        <ItemElement group={{name: 'SMP'}} />
        <ItemElement group={{name: 'FLT'}} />
        <ItemElement group={{name: 'SHA'}} />
        <ItemElement group={{name: 'REV'}} />
        <ItemElement group={{name: 'ECH'}} />
        <ItemElement group={{name: 'CMP'}} />
        </div>
      </div>
    );
  }
}

export default ParameterGroups;
