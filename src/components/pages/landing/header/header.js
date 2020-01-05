import React from "react";
import header from './header.module.scss';
import Logo from '../logo/logo';
import Icon from '../icon/icon';

const Header = () => {
  return (
    <div className={header.main}>
      <header className={header.header}>
        <div className={header.logo_icon_box}>
          <div className={header.logo}>
            <Logo />
          </div>
          <div className={header.icon}>
            <a href="/movie" >
              <Icon />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
