import React from "react";
import "./landing.css";
import Logo from "./logo";
import Icon from "./icon";

const Header = () => {
  return (
    <div className="main">
      <header className="header">
        <div className="logo-icon-box">
          <div className="logo">
            <Logo />
          </div>
          <div className="icon">
            {/*<a href="/">*/}
              <Icon />
            {/*</a>*/}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
