// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import './metronome.css';
import { Indicator } from './components/Indicator/Indicator'
import { BpmBox } from './components/containers/BpmBox/BpmBox';
import { useBpm } from './system/context/bpmContext';
import data from './assets/bpm.json';
import { getBpmArray, getActiveSongs } from './system/utilities/helpers';

function App() {

  const { bpm, setBpmList, setBpm, bpmSongs, setBpmSongs } = useBpm();

  useEffect(() => {
    const bpmList = getBpmArray(data)
    setBpmList(bpmList);
    setBpm(bpmList[0]);
  }, [data]);

  useEffect(() => {
    const activeSongs = getActiveSongs(bpm, data)
    setBpmSongs(activeSongs);
  }, [bpm]);



  return (
    <div className="main">
      <p className='title'>digital metronome</p>
      <Indicator bpm={bpm}></Indicator>
      <BpmBox></BpmBox>
      <div className="songs">
        <p className="songsTitle">Songs that use this BPM:</p>
        <ul className="songList">
          {bpmSongs.map((song, i)=><li key={i}>{`${song[0]} (${song[1]})`}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
