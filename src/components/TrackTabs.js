import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './TrackTabs.module.css'

class TrackTabs extends Component {
  render () {
    const trackItems = this.props.tracks.map((track, index) =>
      <TrackItem
        key={track}
        value={track}
        active={index === this.props.track} />
    )
    return (
      <div className={styles.TrackTabs}>
        {trackItems}
      </div>
    )
  }
}

const TrackItem = (props) => {
  const tabItemStyle = classNames({
    [styles.tabItem]: true,
    [styles.tabItemActive]: props.active
  })
  const tabItemBusButtonStyle = classNames({
    [styles.tabItemBusButton]: true,
    [styles.tabItemActiveBusButton]: props.active
  })
  return (
    <div className={tabItemStyle}>
      <span>TRACK {props.value}</span>
      <div className={styles.tabItemBus}>
        <div className={tabItemBusButtonStyle}>M</div>
        <div className={tabItemBusButtonStyle}>S</div>
      </div>
    </div>
  )
}

export default TrackTabs
