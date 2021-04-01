import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = { salad: 500, cheese: 1000, bacon: 1500, meat: 2000 };
const INGREDIENT_NAMES = {
  bacon: "Bacon",
  cheese: "Cheese",
  meat: "Patty",
  salad: "Veggies"
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 0,
    confirmOrder: false
  };
  continueOrder = () => {};
  showConfirmModal = () => {
    this.setState({
      confirmOrder: true
    });
  };
  closeConfirmModal = () => {
    this.setState({
      confirmOrder: false
    });
  };

  addIngredient = type => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
  };
  reduceIngredient = type => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    }
  };

  render() {
    const disabled = { ...this.state.ingredients };

    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    const orderDisabler = this.state.totalPrice <= 0;

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            ingredientNames={INGREDIENT_NAMES}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          orderDisabler={orderDisabler}
          disabled={disabled}
          addIngredient={this.addIngredient}
          reduceIngredient={this.reduceIngredient}
          totalPrice={this.state.totalPrice}
          ingredientNames={INGREDIENT_NAMES}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
