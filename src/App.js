import React, { Component } from 'react';
import TransportControls from './components/TransportControls'
import TrackTabs from './components/TrackTabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TransportControls />
        <TrackTabs />
      </div>
    );
  }
}

export default App;
