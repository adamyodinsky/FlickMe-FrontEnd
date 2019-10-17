import React from 'react';
import './ToggleFiltersButton.css';

const ToggleFiltersButton = (props) => {
  return (
  <div >
    <button className='myButton' onClick={props.click} >On/Off Filters</button>
  </div>
  )
};

export default ToggleFiltersButton;