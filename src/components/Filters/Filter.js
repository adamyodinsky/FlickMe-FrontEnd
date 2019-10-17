import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './Filter.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


const Handle = Slider.Handle;

const ToolTip = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
      <Tooltip
               prefixCls="rc-slider-tooltip"
               overlay={value}
               visible={dragging}
               placement="top"
               key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
  );
};

const Filter = (props) => {
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

export default Filter;
