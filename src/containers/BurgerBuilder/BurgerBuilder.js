import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = oldCount + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        let newPrice = this.state.totalPrice;
        if (oldCount === 0) {
            updatedIngredients[type] = oldCount;
        } else {
            updatedIngredients[type] = oldCount - 1;
            newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        }
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
