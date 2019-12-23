import React from 'react';
import Header from './Header';
import Logo from './Logo';

const Landing = () => {
  return (
      <section className="landing">
        <div className="landing__header">
            <Header/>
        </div>
        <div className="landing__body">
          <Logo className="landing__body__logo" />
        </div>
      </section>
  )
};

export default Landing;
