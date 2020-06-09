import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    // console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map((igkey) =>{
        return [...Array(props.ingredients[igkey])].map((ig,index) =>{
            // console.log(ig,index,igkey);
            return <BurgerIngredient type={igkey} key={igkey+index}/>;
        });
    }).reduce((arr,curr)=>{
        return arr.concat(curr)
    },[]);
    
    if(transformedIngredients.length === 0)
    {
        transformedIngredients = (<p> Please Start Adding Ingredients</p>);
    }
    


    
    // This also Works before reduce func
    // const transformedIngredients = Object.keys(props.ingredients).map((igkey) =>{
    //     let arr = [];
    //     for(let i = 0;i<props.ingredients[igkey];i++)
    //     {
    //         arr.push(<BurgerIngredient type={igkey} key={igkey+i}/>);
    //     }
    //     return arr;
    // });
    return(
        <div className={Styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );


}
export default burger;