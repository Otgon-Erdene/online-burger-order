import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
      <p>
        Price:<strong>{props.totalPrice}</strong>
      </p>

      {Object.keys(props.ingredientNames).map(el => (
        <BuildControl
          key={el}
          addIngredient={props.addIngredient}
          reduceIngredient={props.reduceIngredient}
          disabled={props.disabled}
          type={el}
          ingredient={props.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.orderDisabler}
        className={css.OrderButton}
      >
        Order Proceed
      </button>
    </div>
  );
};
export default BuildControls;
