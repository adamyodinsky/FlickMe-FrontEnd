import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Handle = Slider.Handle;

const Filter = (props) => {
  const { click, value, dragging, index, ...restProps } = props;
  return (
        <Tooltip className='form input-range'
                 prefixCls="rc-slider-tooltip"
                 overlay={value}
                 visible={dragging}
                 placement="top"
                 key={index}
                 onChange
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
  );
};


export default Filter;
