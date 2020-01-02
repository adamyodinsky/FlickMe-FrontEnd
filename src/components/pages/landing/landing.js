import React from 'react';
import Header from './header/header';

const Landing = (props) => {
  return <Header click={props.getMovie}/>;
};

export default Landing;
