import './Filter.css';
import 'react-input-range/lib/css/index.css';
import React from 'react';
import InputRange from 'react-input-range';

const YearFilter = (props) => {
  let value = props.value;
  return (
      <form className='form'>
        <InputRange
            name='yearsForm'
            draggableTrack
            allowSameValues
            minValue={1920}
            maxValue={2019}
            value={props.value}
            onChange={props.change}
        />
      </form>
  )
};

export default YearFilter;
