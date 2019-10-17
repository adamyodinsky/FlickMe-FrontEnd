import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css'

const Range = Slider.Range;


const Filter = (props) => {
  const { title, onChange, defaultMin, defaultMax, min, max, marks, step} = props;
  return (
      <div className='form'>
        <p className='p'>{title}</p>
        <Range 
            min={min}
            max={max}
            defaultValue={[defaultMin, defaultMax]}
            pushable={25}
            onChange={onChange}
            marks={marks}
            step={step}
        />
      </div>
  )
};

export default Filter;
