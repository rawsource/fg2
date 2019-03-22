import React, { Component } from 'react';
import ParameterGroups from './ParameterGroups'
import TrackParameters from './TrackParameters'
import ValueController from './ValueController'
import TriggerController from './TriggerController'
import AppContext from '../AppContext'
import './PatternEditor.css';

class PatternEditor extends Component {
  render() {
    return (
      <div className="PatternEditor">
      <div className="pattern-editor">
      <ParameterGroups />
      <div className="sequencer">
        <TrackParameters />
        <AppContext.Consumer>
          {state => (
            <ValueController
              parameters={state.parameters}
              setParameter={state.setParameter} />
          )}
        </AppContext.Consumer>
        <AppContext.Consumer>
          {state => (
            <TriggerController
              steps={state.steps}
              setStep={state.setStep} />
          )}
        </AppContext.Consumer>
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
