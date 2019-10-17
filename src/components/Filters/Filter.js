import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


const Filter = (props) => {
  const { onChange, defaultMin, defaultMax, min, max, marks, step} = props;
  return (
      <div className='form'>
        <Range
            min={min}
            max={max}
            defaultValue={[defaultMin, defaultMax]}
            pushable={0}
            onChange={onChange}
            marks={marks}
            step={step}
        />
      </div>
  )
};

export default Filter;
