import React from 'react';
import Title from '../../../../assets/title.svg'
import headerLogo from './headerLogo.module.css'

const HeaderLogo = () => {
  return(
      <header className={headerLogo.header}>
        <img
            src={Title}
            className={headerLogo.header__title + ' ' + headerLogo.shadow}
            alt="title"
        />
      </header>
  );
};

export default HeaderLogo;
