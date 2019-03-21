import React, { Component } from 'react';
import './TransportControls.css';

const TimeElement = React.memo((props) => {
  return (
    <div className="time">
      <div className="inner">
        120.00 <span>BPM</span>
      </div>
      <div className="inner">
        3:1:4 <span>BARS</span>
      </div>
    </div>
  );
});

class TransportControls extends Component {
  render() {
    return (
      <div className="TransportControls">
        <div className="left">
          <div className="title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 72c101.689 0 184 82.295 184 184 0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-101.689 82.295-184 184-184m0-64C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 184c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64m0-64c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128z"/></svg>
            RWSS-30H
          </div>
          <div className="button btn-small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/></svg>
          </div>
        </div>
        <div className="right">
          <div className="button transport-rewind">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"/></svg>
          </div>
          &nbsp;
          <div className="button transport-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
          </div>
          <TimeElement />
        </div>
      </div>
    );
  }
}

export default TransportControls;
