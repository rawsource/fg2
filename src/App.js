import React, { Component } from 'react'
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import PatternOptions from './components/PatternOptions'
import LevelMeter from './components/LevelMeter'
import PatternEditor from './components/PatternEditor'
import AppContext from './AppContext'
import styles from './App.module.css'

// TODO: init app with default selection of track, pattern, group and trigs and values

class AppStore extends Component {
  patternLength = 64
  pageLength = 16

  setPattern = (pattern) => {
    pattern = Number.parseInt(pattern)
    const steps = this.getSequencerData(pattern, 'smp_trg')
    const values = this.getSequencerData(pattern, this.state.parameter)
    this.setState({ pattern, values, steps })
  }

  setStep = (step, trg) => {
    const steps = [...this.state.steps]
    const stepTrg = trg === undefined ? !steps[step] : trg
    steps[step] = stepTrg
    this.setSequencerData('smp_trg', step, stepTrg)
    this.setState({ steps })
    return stepTrg
  };

  setValue = (step, val) => {
    const values = [...this.state.values]
    values[step] = val
    this.setSequencerData(this.state.parameter, step, val)
    this.setState({ values })
  };

  getActiveParameter = (group) => {
    return this.state.parameters[group].find(x => x.active === true).id
  }

  setGroup = (group) => {
    const groups = [...this.state.groups]
    groups.map(x => {
      x.active = x.id === group
      return x
    })
    const parameter = this.getActiveParameter(group)
    const values = this.getSequencerData(this.state.pattern, parameter)
    this.setState({ group, groups, parameter, values })
  };

  setParameter = (parameter) => {
    const parameters = { ...this.state.parameters }
    parameters[this.state.group].map(x => {
      x.active = x.id === parameter
      return x
    })
    const values = this.getSequencerData(this.state.pattern, parameter)
    this.setState({ parameter, parameters, values })
  };

  getDefaultValues = (val) => {
    return Array(this.patternLength).fill(val)
  }

  setSequencerData = (parameter, step, value) => {
    const track = this.state.track
    const pattern = this.state.pattern
    this.sequencerData
      .tracks[track]
      .patterns[pattern][parameter][step] = value
  }

  getSequencerData = (pattern, parameter) => {
    const track = this.state.track
    return this.sequencerData
      .tracks[track]
      .patterns[pattern][parameter].slice(0, this.pageLength)
  }

  patternDefaults = {
    settings: {
      len: this.pageLength
    },
    smp_trg: this.getDefaultValues(false),
    smp_vel: this.getDefaultValues(100),
    smp_pit: this.getDefaultValues(50),
    smp_sta: this.getDefaultValues(0),
    smp_end: this.getDefaultValues(10),
    flt_act: this.getDefaultValues(0),
    flt_typ: this.getDefaultValues(0),
    flt_frq: this.getDefaultValues(0),
    flt_qua: this.getDefaultValues(0),
    flt_det: this.getDefaultValues(0),
    flt_gai: this.getDefaultValues(0),
    sha_act: this.getDefaultValues(0),
    sha_cur: this.getDefaultValues(0),
    sha_ovs: this.getDefaultValues(0),
    cmp_act: this.getDefaultValues(0),
    cmp_trs: this.getDefaultValues(0),
    cmp_kne: this.getDefaultValues(0),
    cmp_rat: this.getDefaultValues(0),
    cmp_red: this.getDefaultValues(0),
    cmp_att: this.getDefaultValues(0),
    cmp_rel: this.getDefaultValues(0)
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
    parameter: 'smp_vel',
    parameters: {
      smp: [
        { id: 'smp_vel', name: 'Velocity', active: true },
        { id: 'smp_pit', name: 'Pitch' },
        { id: 'smp_sta', name: 'Sample Start' },
        { id: 'smp_end', name: 'Sample End' }
      ],
      flt: [
        { id: 'flt_act', name: 'Active', active: true },
        { id: 'flt_typ', name: 'Type' },
        { id: 'flt_frq', name: 'Frequency' },
        { id: 'flt_qua', name: 'Quality Factor' },
        { id: 'flt_det', name: 'Detune' },
        { id: 'flt_gai', name: 'Gain' }
      ],
      sha: [
        { id: 'sha_act', name: 'Active', active: true },
        { id: 'sha_cur', name: 'Curve' },
        { id: 'sha_ovs', name: 'Oversample' }
      ],
      cmp: [
        { id: 'cmp_act', name: 'Active', active: true },
        { id: 'cmp_trs', name: 'Treshold' },
        { id: 'cmp_kne', name: 'Knee' },
        { id: 'cmp_rat', name: 'Ratio' },
        { id: 'cmp_red', name: 'Reduction' },
        { id: 'cmp_att', name: 'Attack' },
        { id: 'cmp_rel', name: 'Release' }
      ]
    },
    steps: this.patternDefaults.smp_trg.slice(0, this.pageLength),
    values: this.patternDefaults.smp_vel.slice(0, this.pageLength),
    pattern: 0,
    patterns: [1, 2, 3, 4, 5, 6, 7, 8],
    track: 0,
    tracks: [1, 2, 3, 4, 5, 6, 7, 8],
    page: 0,
    pages: [1, 2, 3, 4],
    setStep: this.setStep,
    setGroup: this.setGroup,
    setValue: this.setValue,
    setPattern: this.setPattern,
    setParameter: this.setParameter
  };

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <AppStore>
          <TransportControls />
          <AppContext.Consumer>
            {state => (
              <TrackTabs tracks={state.tracks} />
            )}
          </AppContext.Consumer>
          <div className={styles.track}>
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
    )
  }
}

export default App
