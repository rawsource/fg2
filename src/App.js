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

  state = {
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
    tracks: [1],
    addTrack: this.addTrack
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
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
