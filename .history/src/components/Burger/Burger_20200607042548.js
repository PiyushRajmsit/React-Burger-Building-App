import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    console.log(props);
    const transformedIngriedients = Object.keys(props.ingredients).map((igkey) =>{
        return [...Array(props.ingredients[igkey])].map((igkey,index) =>{
            return <BurgerIngredient type={igkey} key={igkey+index}/>;
        });
    });

    return(
        <div className={Styles.Burger}>
            {transformedIngriedients}
        </div>
    );


}
export default burger;