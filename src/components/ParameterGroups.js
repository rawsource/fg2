import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './ParameterGroups.module.css'

const Group = (props) => {
  const className = classNames({
    [styles.item]: true,
    [styles.active]: props.group.active
  })
  return (
    <div
      className={className}
      onMouseDown={props.mouseDownHandler}
      data-group={props.group.id}
      title={props.group.name}>
      {props.group.id}
    </div>
  )
}

class ParameterGroups extends Component {
  groupMouseDownHandler = (event) => {
    if (event.buttons !== 1) return
    this.props.setGroup(event.target.dataset.group)
  }

  render () {
    const parameterGroups = this.props.groups.map((group) =>
      <Group
        key={group.id}
        group={group}
        mouseDownHandler={this.groupMouseDownHandler} />
    )
    return (
      <div className={styles.ParameterGroups}>
        {parameterGroups}
      </div>
    )
  }
}

export default ParameterGroups
