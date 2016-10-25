import React from 'react';
import SynthContainer from './synth/synth_container'
import RecorderContainer from './recorder/recorder_container'
import JukeBoxContainer from './recorder/jukebox_container'

const App = () => (
  <div className='app'>
    <SynthContainer />
    <RecorderContainer />
    <JukeBoxContainer />
  </div>
);

export default App;
