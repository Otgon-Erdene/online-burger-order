import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = props => {
  return (
    <div>
      <h3>Your Orders</h3>
      <p>Ingredients</p>
      <ul>
        {Object.keys(props.ingredients).map(el => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Price: {props.totalPrice} ₮</strong>
      </p>
      <Button
        clicked={props.onContinue}
        btnType="Success"
        buttonText="Continue"
      />
      <Button clicked={props.onCancel} btnType="Danger" buttonText="Cancel" />
    </div>
  );
};

export default OrderSummary;
