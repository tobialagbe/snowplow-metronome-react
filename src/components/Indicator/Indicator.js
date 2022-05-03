import React from 'react';
import PropTypes from 'prop-types';
import './Indicator.css';
import { bpmToSeconds } from '../../system/utilities/helpers';

export const Indicator = ({bpm = 0}) => {
    return (
       <div className='indicator'>
        <div className='pulse' style={{animationDuration: `${bpmToSeconds(bpm)}s`}}></div>
        <div className='holder'>
          <p style={{margin:0}}>{bpm}</p>
        </div>
       </div>
    );
};

Indicator.propTypes = {
    bpm: PropTypes.number,
};
