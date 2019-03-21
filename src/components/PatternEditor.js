import React, { Component } from 'react';
import ParameterGroups from './ParameterGroups'
import TrackParameters from './TrackParameters'
import ValueController from './ValueController'
import TriggerController from './TriggerController'
import './PatternEditor.css';

class PatternEditor extends Component {
  render() {
    return (
      <div className="PatternEditor">
      <div className="pattern-editor">
      <ParameterGroups />
      <div className="sequencer">
        <TrackParameters />
        <ValueController />
        <TriggerController />
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
