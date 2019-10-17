import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


const ToolTipFilter = (props) => {
  const { title, onChange, defaultMin, defaultMax, min, max, marks, step} = props;
  return (
      <div className='form'>
        <p className='p'>{title}</p>
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

export default ToolTipFilter;