import React from 'react';
import Aux from '../../../hoc/Aux';
const ordersummary = (props) =>{
    
    const ingredientSummary = Object.keys(props.ingredient).map((ig) =>{
        return (<li key={ig}><strong><span style={{textTransform: 'capitalize'}}>{ig} : </span></strong> {props.ingredient[ig]} </li>);
    });
    
    return(
        <Aux>
            <h3>Your Orders</h3>
            <p> Burger Contains:</p>
            <ul>    
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout:</p>
        </Aux>
    );
}
export default ordersummary;