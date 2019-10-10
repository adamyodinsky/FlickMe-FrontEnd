import './Filter.css';
import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Filter = (props) => {
  return (
      <form className='form'>
        <InputRange
          draggableTrack
          minValue={1920}
          maxValue={2019}
          value={props.value}
          onChange={props.change}
        />
      </form>
  )
};

export default Filter;