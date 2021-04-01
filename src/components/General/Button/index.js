import React, { Component } from "react";
import css from "./style.module.css";

const Button = props => (
  <button
    onClick={props.clicked}
    className={`${css.Button} ${css[props.btnType]}`}
  >
    {props.buttonText}
  </button>
);

export default Button;
