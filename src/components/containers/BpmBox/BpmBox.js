import React from 'react';
import PropTypes from 'prop-types';
import './BpmBox.css';
import { Bpm } from '../../Bpm/Bpm';
import { useBpm } from '../../../system/context/bpmContext';

export const BpmBox = () => {
    
    const { bpmList } = useBpm();

    return (
       <div className='bpmBox'>
           {bpmList.map((b,i)=><Bpm key={i} bpm={b}></Bpm>)}
       </div>
    );
};

BpmBox.propTypes = {
    data: PropTypes.array,
};
