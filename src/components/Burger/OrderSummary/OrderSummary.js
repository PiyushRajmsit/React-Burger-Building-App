import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <strong><p> Total Amount: ${props.price} </p></strong>
            <Button btnType='Danger' clicked={props.cancel}> CANCEL </Button>
            <Button btnType="Success" clicked={props.continue}> CONTINUE </Button>
        </Aux>
    );
}
export default ordersummary;