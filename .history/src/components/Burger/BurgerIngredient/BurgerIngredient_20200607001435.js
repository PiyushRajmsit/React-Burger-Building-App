import React from 'react';
import Styles from './BurgerIngredient.css';

const burgerIngredient = (props) =>{
    let ingredient = null;

    switch(props.type){
    
        case('bread-bottom'):
            ingredient = <div className={Styles.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (<div className={Styles.BreadTop}>
                            <div className={Styles.Seeds1}></div>
                            <div className={Styles.Seeds2}></div>
                        </div>);


    }

};

export default burgerIngredient;