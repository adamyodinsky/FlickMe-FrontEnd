import React from 'react';
import Background from './background';

const Header = () => {
  return(
      <header className="header">
        <img
            src="resources/title.svg"
            className="header__title shadow"
            alt="title"
        />
      </header>
  );
};

export default Header;
