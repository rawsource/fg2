import React, { Component } from 'react';
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'
import AppContext from './AppContext'
import './App.css';


class AppStore extends Component {
  addTrack = () => {
    this.setState(state => ({
      tracks: [...state.tracks, state.tracks.length + 1]
    }));
  };

  state = {
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
          <TrackTabs />
        </AppStore>
      </div>
    );
  }
}

export default App;
