import React, { Component } from 'react'
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import PatternOptions from './components/PatternOptions'
import LevelMeter from './components/LevelMeter'
import PatternEditor from './components/PatternEditor'
import AppContext from './AppContext'
import AppStore from './AppStore'
import styles from './App.module.css'

// TODO: init app with default selection of track, pattern, group and trigs and values

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
                <PatternOptions
                  pattern={state.pattern}
                  patterns={state.patterns}
                  setPattern={state.setPattern} />
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
