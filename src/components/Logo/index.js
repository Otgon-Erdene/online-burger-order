import React from "react";
import logo from "../../assets/img/burger-logo.png";
import css from "./style.module.css";

const Logo = () => (
  <div className={css.Logo}>
    <img src={logo} />
  </div>
);

export default Logo;
