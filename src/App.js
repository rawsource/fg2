import React, { Component } from 'react';
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import PatternOptions from './components/PatternOptions'
import LevelMeter from './components/LevelMeter'
import PatternEditor from './components/PatternEditor'
import AppContext from './AppContext'
import './App.css';

// TODO: init app with default selection of track, pattern, group and trigs and values


class AppStore extends Component {
  setPattern = (pattern) => {
    pattern = Number.parseInt(pattern);
    const values = this.getSequencerData(pattern, this.state.parameter);
    this.setState({ pattern, values });
  }

  setStep = (step, trg) => {
    const steps = [...this.state.steps];
    const stepTrg = trg === undefined ? !steps[step] : trg;
    steps[step] = stepTrg;
    this.setState({ steps });
    return stepTrg;
  };

  setValue = (step, val) => {
    const values = [...this.state.values];
    values[step] = val;
    this.setSequencerData(step, val);
    this.setState({ values });
  };

  getActiveParameter = (group) => {
    return this.state.parameters[group].find(x => x.active === true).id;
  }

  setGroup = (group) => {
    const groups = [...this.state.groups];
    groups.map(x => {
      x.active = x.id === group;
      return x;
    });
    const parameter = this.getActiveParameter(group);
    const values = this.getSequencerData(this.state.pattern, parameter);
    this.setState({ group, groups, parameter, values });
  };

  setParameter = (parameter) => {
    const parameters = { ...this.state.parameters };
    parameters[this.state.group].map(x => {
      x.active = x.id === parameter;
      return x;
    });
    const values = this.getSequencerData(this.state.pattern, parameter);
    this.setState({ parameter, parameters, values });
  };

  getDefaultValues = (val) => {
    return Array(64).fill(val)
  }

  setSequencerData = (step, value) => {
    const track = this.state.track;
    const pattern = this.state.pattern;
    const parameter = this.state.parameter;
    this.sequencerData
      .tracks[track]
      .patterns[pattern]
      .val[parameter][step] = value
  }

  getSequencerData = (pattern, parameter) => {
    const track = this.state.track;
    return this.sequencerData
      .tracks[track]
      .patterns[pattern]
      .val[parameter].slice(0, 16)
  }

  patternDefaults = {
    len: 16,
    trg: this.getDefaultValues(false),
    val: {
      vel: this.getDefaultValues(100),
      pit: this.getDefaultValues(50),
      sta: this.getDefaultValues(0),
      end: this.getDefaultValues(10),
      act: this.getDefaultValues(0),
      typ: this.getDefaultValues(0),
      frq: this.getDefaultValues(0),
      qua: this.getDefaultValues(0),
      det: this.getDefaultValues(0),
      gai: this.getDefaultValues(0)
    }
  }

  sequencerData = {
    tracks: [
      {
        patterns: [
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults)),
          JSON.parse(JSON.stringify(this.patternDefaults))
        ]
      }
    ]
  }

  state = {
    group: 'smp',
    groups: [
      { id: 'smp', name: 'Sampler', active: true },
      { id: 'flt', name: 'Biquad Filter' },
      { id: 'sha', name: 'Wave Shaper' },
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
      ],
      sha: [
        { id: 'act', name: 'Active', active: true },
        { id: 'cur', name: 'Curve' },
        { id: 'ovs', name: 'Oversample' }
      ],
      cmp: [
        { id: 'act', name: 'Active', active: true },
        { id: 'trs', name: 'Treshold' },
        { id: 'kne', name: 'Knee' },
        { id: 'rat', name: 'Ratio' },
        { id: 'red', name: 'Reduction' },
        { id: 'att', name: 'Attack' },
        { id: 'rel', name: 'Release' }
      ]
    },
    steps: this.patternDefaults.trg.slice(0, 16),
    values: this.patternDefaults.val.vel.slice(0, 16),
    pattern: 0,
    patterns: [1, 2, 3, 4, 5, 6, 7, 8],
    track: 0,
    tracks: [1, 2, 3, 4, 5, 6, 7, 8],
    setStep: this.setStep,
    setGroup: this.setGroup,
    setValue: this.setValue,
    setPattern: this.setPattern,
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
              <TrackTabs tracks={state.tracks} />
            )}
          </AppContext.Consumer>
          <div className="track">
            <AppContext.Consumer>
              {state => (
                <PatternOptions pattern={state.pattern} patterns={state.patterns} setPattern={state.setPattern} />
              )}
            </AppContext.Consumer>
            <LevelMeter />
            <PatternEditor />
          </div>
        </AppStore>
      </div>
    );
  }
}

export default App;
