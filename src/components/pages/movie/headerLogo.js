import React from 'react';
import Title from '../../../assets/title.svg'

const HeaderLogo = () => {
  return(
      <header className="header">
        <img
            src={Title}
            className="header__title shadow"
            alt="title"
        />
      </header>
  );
};

export default HeaderLogo;
