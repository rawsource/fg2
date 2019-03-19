import React, { Component } from 'react';
import './TrackTabs.css';
import AppContext from '../AppContext';

class TrackTabs extends Component {
  static contextType = AppContext;
  render() {
    const trackItems = this.context.tracks.map((track) =>
      <TrackItem key={track}
                 value={track} />
    );
    return (
      <div className="TrackTabs">
        {trackItems}
        {trackItems.length < 8 &&
          <div className="item">
            <div className="bus">
              <div className="button" onClick={this.context.addTrack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
              </div>
            </div>
          </div>
        }
      </div>
    );
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
);

export default TrackTabs;
