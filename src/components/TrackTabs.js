import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './TrackTabs.module.css'

class TrackTabs extends Component {
  trackItemMouseDownHandler = (event) => {
    if (event.buttons !== 1) return
    const track = Number.parseInt(event.target.dataset.track)
    this.props.setTrack(track)
  }

  render () {
    const trackItems = this.props.tracks.map((track, index) =>
      <TrackItem
        key={track.id}
        value={track.id}
        track={index}
        mouseDownHandler={this.trackItemMouseDownHandler}
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
    <div
      className={tabItemStyle}
      data-track={props.track}
      onMouseDown={props.mouseDownHandler}>
      TRACK {props.value}
      <div className={styles.tabItemBus}>
        <div className={styles.tabItemBusButton}>M</div>
        <div className={styles.tabItemBusButton}>S</div>
      </div>
    </div>
  )
}

export default TrackTabs
