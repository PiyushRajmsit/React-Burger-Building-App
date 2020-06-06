import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    console.log(props);
    const transformedIngriedients = Object.keys(props.ingredients).map((igkey) =>{
        return [...Array(props.ingredients[igkey])].map((ig,index) =>{
            console.log(ig,index);
            return <BurgerIngredient type={igkey} key={igkey+index}/>;
        });
    });

    return(
        <div className={Styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngriedients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );


}
export default burger;