import React from "react";
import logo from "../style/assets/img/logo_portefolio.png";
import nameLogo from "../style/assets/img/name-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-rotate" src={logo} alt="logo" />
      <img className="logo-name" src={nameLogo} alt="logo" />
    </div>
  );
};

export default Logo;
