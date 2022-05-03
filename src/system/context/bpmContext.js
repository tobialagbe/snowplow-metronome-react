import {createContext, useState, useContext } from 'react';

const BpmContext = createContext(null);

export const BpmProvider = ({children})=>{
    const [bpm, setBpm] = useState(null);
    const [bpmList, setBpmList] = useState([]);
    const [bpmSongs, setBpmSongs] = useState([]);
   return (
       <BpmContext.Provider value={{bpm, setBpm, bpmSongs, setBpmSongs, bpmList, setBpmList}}>
           {children}
       </BpmContext.Provider>
   )
}

export const useBpm = ()=> useContext(BpmContext);