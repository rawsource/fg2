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
  return (
    <div className={tabItemStyle}>
      <span>TRACK {props.value}</span>
      <div className={styles.tabItemBus}>
        <div className={styles.tabItemBusButton}>M</div>
        <div className={styles.tabItemBusButton}>S</div>
      </div>
    </div>
  )
}

export default TrackTabs
