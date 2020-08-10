import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler';
const Ingredients_Prices = {  
    salad : 0.5,
    bacon : 0.7,
    cheese : 0.4,
    meat : 1.3
};
class BurgerBuilder extends Component{

    state = {
        ingredients : null,
        totalPrice : 4,
        purchasable : false,
        readyForOrder : false,
        loading : false
    };

    componentDidMount(){
        axios.get('/ingredients.json')
        .then(response => {
            console.log('ingredients',response.data);
            this.setState({ingredients : response.data});
        }).catch(error =>{
            console.log('Error - Message',error);
        });
    }


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
        // alert('You are Ready to Eat!!..');
        this.setState({loading: true});
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer : {
                name : 'Dr. Heinz Doofenshmirtz',
                address : {
                    Street : "Dr. Heinz Doofenshmirtz Corporation",
                    ZipCode : "666",
                    Country : "USA"
                },
                email : "CurseyouPerry@Platypus.com",
                delivery : "Fastest"
            },
        }
        axios.post("/order.json",order)
        .then(response => {
            console.log(response,"Successful Request");
            this.setState({loading:false,readyForOrder:false});
        })
        .catch(error => {
            console.log("Error Message",error);
            this.setState({loading:false,readyForOrder:false});
        });
    }

    render(){

        let disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] ? false:true;
        }
        let burger = <Spinner/>;
        let orderSummary = null;
        if(this.state.ingredients)
        {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls add={this.addIngredients} 
                    remove={this.removeIngredients}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.updateReadyForOrder}/>
                </Aux>
            );
            
            orderSummary = (
                <OrderSummary 
                ingredient={this.state.ingredients}
                cancel={this.updateReadyForOrder}
                continue={this.purchaseContinue}
                price={this.state.totalPrice.toFixed(2)}
                />   
            );

        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return(
            <Aux>
                <Modal show = {this.state.readyForOrder} closed={this.updateReadyForOrder}>
                 {orderSummary}   
                </Modal>
                {burger}
            </Aux>


        );
    }

} 

export default withErrorHandler(BurgerBuilder,axios);