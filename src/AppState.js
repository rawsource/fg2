import React, { Component } from 'react'
import AppContext from './AppContext'

class AppState extends Component {
  numTracks = 8
  numPatterns = 8
  numPages = 4
  pageLength = 16
  patternLength = this.numPages * this.pageLength

  setTrack = (track) => {
    const pattern = this.getActivePattern(track)
    const steps = this.getSequencerData(track, pattern, 'smp_trg')
    const values = this.getSequencerData(track, pattern, this.state.parameter)
    this.setState({ track, steps, values })
  }

  setPattern = (pattern) => {
    const tracks = [...this.state.tracks]
    tracks[this.state.track].pattern = pattern
    const steps = this.getSequencerData(this.state.track, pattern, 'smp_trg')
    const values = this.getSequencerData(this.state.track, pattern, this.state.parameter)
    this.setState({ tracks, steps, values })
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

  getActivePattern = (track) => {
    return this.state.tracks[track].pattern
  }

  getActiveParameter = (group) => {
    return this.state.parameters[group].find(x => x.active === true).id
  }

  setGroup = (group) => {
    const groups = [...this.state.groups]
    groups.map(x => {
      x.active = x.id === group
      return x
    })
    const pattern = this.getActivePattern(this.state.track)
    const parameter = this.getActiveParameter(group)
    const values = this.getSequencerData(this.state.track, pattern, parameter)
    this.setState({ group, groups, parameter, values })
  };

  setParameter = (parameter) => {
    const parameters = { ...this.state.parameters }
    parameters[this.state.group].map(x => {
      x.active = x.id === parameter
      return x
    })
    const pattern = this.getActivePattern(this.state.track)
    const values = this.getSequencerData(this.state.track, pattern, parameter)
    this.setState({ parameter, parameters, values })
  };

  getDefaultValues = (val) => {
    return Array(this.patternLength).fill(val)
  }

  setSequencerData = (parameter, step, value) => {
    const track = this.state.track
    const pattern = this.getActivePattern(track)
    this.sequencerData
      .tracks[track]
      .patterns[pattern][parameter][step] = value
  }

  getSequencerData = (track, pattern, parameter) => {
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
    tracks: Array(this.numTracks).fill(0).map(() => {
      return {
        patterns: Array(this.numPatterns).fill(0).map(() => {
          return JSON.parse(JSON.stringify(this.patternDefaults))
        })
      }
    })
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
    patterns: Array.from({ length: this.numPatterns }, (v, k) => k + 1),
    track: 0,
    tracks: Array(this.numTracks).fill(0).map((value, index) => {
      return {
        id: index + 1,
        pattern: 0
      }
    }),
    page: 0,
    pages: Array.from({ length: this.numPages }, (v, k) => k + 1),
    setStep: this.setStep,
    setGroup: this.setGroup,
    setValue: this.setValue,
    setTrack: this.setTrack,
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

export default AppState
