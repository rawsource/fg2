import React, { Component } from 'react'
import './TrackTabs.css'

class TrackTabs extends Component {
  render () {
    const trackItems = this.props.tracks.map((track) =>
      <TrackItem
        key={track}
        value={track} />
    )
    return (
      <div className="TrackTabs">
        {trackItems}
      </div>
    )
  }
}

const TrackItem = (props) => (
  <div className="item">
    <span>TRACK {props.value}</span>
    <div className="bus">
      <div className="button">M</div>
      <div className="button">S</div>
    </div>
  </div>
)

export default TrackTabs
