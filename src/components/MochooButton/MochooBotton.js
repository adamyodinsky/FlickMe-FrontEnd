import React from 'react';
import './MochooButton.css'

const mochooBotton = (props) => {
  return (
    <section className='section'>
        <button className='glow-on-hover' onClick={props.click}>MoChooe</button>
    </section>
  )
};

export default mochooBotton;