import React, { Component } from 'react';
import './ParameterGroups.css';

const Group = (props) => {
  let className = 'item';
  if (props.group.active) {
    className = `${className} active`;
  }
  return (
    <div
      className={className}
      onMouseDown={props.mouseDownHandler}
      data-group={props.group.id}
      title={props.group.name}>
      {props.group.id}
    </div>
  );
};

class ParameterGroups extends Component {
  groupMouseDownHandler = (event) => {
    if (event.buttons !== 1) return;
    this.props.setGroup(event.target.dataset.group);
  }

  render() {
    const parameterGroups = this.props.groups.map((group) =>
      <Group
        key={group.id}
        group={group}
        mouseDownHandler={this.groupMouseDownHandler} />
    );
    return (
      <div className="ParameterGroups">
        <div className="parameter-groups">
          {parameterGroups}
        </div>
      </div>
    );
  }
}

export default ParameterGroups;
