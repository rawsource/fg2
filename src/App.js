import React, { Component } from 'react';
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import PatternOptions from './components/PatternOptions'
import LevelMeter from './components/LevelMeter'
import PatternEditor from './components/PatternEditor'
import AppContext from './AppContext'
import './App.css';


class AppStore extends Component {
  addTrack = () => {
    this.setState(state => ({
      tracks: [...state.tracks, state.tracks.length + 1]
    }));
  };

  setStep = (step, trg) => {
    const steps = this.state.steps.slice();
    const stepTrg = trg === undefined ? !steps[step].trg : trg;
    steps[step].trg = stepTrg;
    this.setState({ steps });
    return stepTrg;
  };

  setValue = (step, val) => {
    const values = this.state.values.slice();
    values[step].val = val;
    this.setState({ values });
  };

  setGroup = (group_id) => {
    const groups = this.state.groups.slice();
    groups.map(group => {
      group.active = (group_id === group.id) ? true : false;
      return group;
    });
    const group = group_id;
    this.setState({ group, groups });
  };

  setParameter = (parameter_id) => {
    const parameters = { ...this.state.parameters };
    parameters[this.state.group].map(parameter => {
      parameter.active = (parameter_id === parameter.id) ? true : false;
      return parameter;
    });
    const parameter = parameter_id;
    this.setState({ parameter, parameters });
  };

  state = {
    group: 'smp',
    groups: [
      { id: 'smp', name: 'Sampler', active: true },
      { id: 'flt', name: 'Biquad Filter' },
      { id: 'sha', name: 'Wave Shaper' },
      { id: 'rev', name: 'Reverb' },
      { id: 'ech', name: 'Echo' },
      { id: 'cmp', name: 'Dynamics Compressor' }
    ],
    parameter: 'vel',
    parameters: {
      smp: [
        { id: 'vel', name: 'Velocity', active: true },
        { id: 'pit', name: 'Pitch' },
        { id: 'sta', name: 'Sample Start' },
        { id: 'end', name: 'Sample End' },
      ],
      flt: [
        { id: 'act', name: 'Active', active: true },
        { id: 'typ', name: 'Type' },
        { id: 'frq', name: 'Frequency' },
        { id: 'qua', name: 'Quality Factor' },
        { id: 'det', name: 'Detune' },
        { id: 'gai', name: 'Gain' }
      ]
    },
    steps: [
      { num: 0, trg: false },
      { num: 1, trg: false },
      { num: 2, trg: false },
      { num: 3, trg: false },
      { num: 4, trg: false },
      { num: 5, trg: false },
      { num: 6, trg: false },
      { num: 7, trg: false },
      { num: 8, trg: false },
      { num: 9, trg: false },
      { num: 10, trg: false },
      { num: 11, trg: false },
      { num: 12, trg: false },
      { num: 13, trg: false },
      { num: 14, trg: false },
      { num: 15, trg: false }
    ],
    values: [
      { num: 0, val: 10 },
      { num: 1, val: 50 },
      { num: 2, val: 100 },
      { num: 3, val: 100 },
      { num: 4, val: 100 },
      { num: 5, val: 100 },
      { num: 6, val: 100 },
      { num: 7, val: 100 },
      { num: 8, val: 100 },
      { num: 9, val: 100 },
      { num: 10, val: 100 },
      { num: 11, val: 100 },
      { num: 12, val: 100 },
      { num: 13, val: 100 },
      { num: 14, val: 100 },
      { num: 15, val: 100 },
    ],
    tracks: [1],
    addTrack: this.addTrack,
    setStep: this.setStep,
    setGroup: this.setGroup,
    setValue: this.setValue,
    setParameter: this.setParameter
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppStore>
          <TransportControls />
          <AppContext.Consumer>
            {state => (
              <TrackTabs tracks={state.tracks} addTrack={state.addTrack} />
            )}
          </AppContext.Consumer>
          <div className="track">
              <PatternOptions />
              <LevelMeter />
              <PatternEditor />
          </div>
        </AppStore>
      </div>
    );
  }
}

export default App;
