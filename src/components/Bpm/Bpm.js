import React from 'react';
import PropTypes from 'prop-types';
import './Bpm.css';
import { useBpm } from './../../system/context/bpmContext';

export const Bpm = ({bpm}) => {

    const { bpm: globalBpm, setBpm } = useBpm();

    const setNewBpm = ()=>{
        setBpm(bpm)
    }

    const isActive = () => globalBpm === bpm

    return (
       <div className='beat' 
        style={{
        backgroundColor: !isActive() ? '#2d1c3f' : '#8eacff', 
        color: !isActive() ? '#8eacff' : '#161020'
        }} 
        onClick={setNewBpm}
        >
           <p style={{margin:0}}>{`${bpm} BPM`}</p>
       </div>
    );
};

Bpm.propTypes = {
    bpm: PropTypes.number,
};
