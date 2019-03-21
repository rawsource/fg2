import React, { Component } from 'react';
import ParameterGroups from './ParameterGroups'
import TrackParameters from './TrackParameters'
import './PatternEditor.css';

class PatternEditor extends Component {
  render() {
    return (
      <div className="PatternEditor">
      <div className="pattern-editor">
      <ParameterGroups />
      <div className="sequencer">
        <TrackParameters />
        <value-controller></value-controller>
        <trigger-controller></trigger-controller>
        <div className="subdivisions">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default PatternEditor;
