import './Filter.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;


const Filter = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
      <div>
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={dragging}
          placement="top"
          key={index}><Handle value={value} {...restProps} />
        </Tooltip>
      </div>
  );
};


export default Filter;
