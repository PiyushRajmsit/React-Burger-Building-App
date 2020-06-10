import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const Ingredients_Prices = {  
    salad : 0.5,
    bacon : 0.7,
    cheese : 0.4,
    meat : 1.3
};
class BurgerBuilder extends Component{

    state = {
        ingredients :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4,
        purchasable : false,
        readyForOrder : false
    };

    addIngredients = (type) =>{
        
        const oldIngredientsValue = this.state.ingredients[type];
        const newIngredientsValue = oldIngredientsValue + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newIngredientsValue;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + Ingredients_Prices[type];

        this.setState({
            ingredients : updatedIngredients,
            totalPrice : newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredients = (type) =>{
        
        const oldIngredientsValue = this.state.ingredients[type];
        if(oldIngredientsValue <= 0)
            return;

        let newIngredientsValue = oldIngredientsValue - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newIngredientsValue;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - Ingredients_Prices[type];

        this.setState({
            ingredients : updatedIngredients,
            totalPrice : newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }
    updatePurchaseState = (ingredients) =>
    {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients).map((igkey)=>{
                return ingredients[igkey];
        }).reduce((sum , curr) =>{
            return sum + curr;
        },0); 
        this.setState({
            purchasable: sum > 0
        });
    }
    updateReadyForOrder = () =>
    {
        const oldReadyForOrder = this.state.readyForOrder;
        const newReadyForOrder = !oldReadyForOrder; 
        this.setState({
            readyForOrder: newReadyForOrder
        });
        console.log(this.state,newReadyForOrder);
    }

    purchaseContinue = () =>{
        alert('You are Ready to Eat!!..');
    }

    render(){

        let disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] ? false:true;
        }
        // console.log(disabledInfo);
        return(
            <Aux>
                <Modal show = {this.state.readyForOrder} closed={this.updateReadyForOrder}>
                    <OrderSummary 
                    ingredient={this.state.ingredients}
                    cancel={this.updateReadyForOrder}
                    continue={this.purchaseContinue}
                    price={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredients} 
                remove={this.removeIngredients}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                order={this.updateReadyForOrder}/>
            </Aux>


        );
    }

} 

export default BurgerBuilder;