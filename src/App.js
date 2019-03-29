import React, { Component } from 'react'
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import PatternOptions from './components/PatternOptions'
import LevelMeter from './components/LevelMeter'
import PatternEditor from './components/PatternEditor'
import AppContext from './AppContext'
import AppState from './AppState'
import styles from './App.module.css'

// TODO: make pageLength (num steps) configurable per pattern
// TODO: active page should be set per track
// TODO: init app with default selection of track, pattern, group and trigs and values

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <AppState>
          <TransportControls />
          <AppContext.Consumer>
            {state => (
              <TrackTabs
                tracks={state.tracks}
                track={state.track}
                setTrack={state.setTrack} />
            )}
          </AppContext.Consumer>
          <div className={styles.track}>
            <AppContext.Consumer>
              {state => (
                <PatternOptions
                  pattern={state.tracks[state.track].pattern}
                  patterns={state.patterns}
                  setPattern={state.setPattern} />
              )}
            </AppContext.Consumer>
            <LevelMeter />
            <PatternEditor />
          </div>
        </AppState>
      </div>
    )
  }
}

export default App
