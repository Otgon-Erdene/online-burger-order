import React from "react";
import css from "./style.module.css";

const BuildControl = props => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.ingredient}</div>
    <button
      disabled={props.disabled[props.type]}
      className={css.Less}
      onClick={() => props.reduceIngredient(props.type)}
    >
      -
    </button>
    <button
      className={css.More}
      onClick={() => props.addIngredient(props.type)}
    >
      +
    </button>
  </div>
);

export default BuildControl;
