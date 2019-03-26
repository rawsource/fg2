import React, { Component } from 'react'
import classNames from 'classnames'
import './TrackTabs.css'

class TrackTabs extends Component {
  render () {
    const trackItems = this.props.tracks.map((track, index) =>
      <TrackItem
        key={track}
        value={track}
        active={index === this.props.track} />
    )
    return (
      <div className="TrackTabs">
        {trackItems}
      </div>
    )
  }
}

const TrackItem = (props) => {
  const className = classNames({
    item: true,
    active: props.active
  })
  return (
    <div className={className}>
      <span>TRACK {props.value}</span>
      <div className="bus">
        <div className="button">M</div>
        <div className="button">S</div>
      </div>
    </div>
  )
}

export default TrackTabs
