import React from 'react';
import Styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'}
];
const buildControls = (props) =>{
    // console.log(props.disabled);
    return(
        <div className={Styles.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((ctrl) =>{
                    return (
                        <BuildControl key={ctrl.label} label={ctrl.label}
                            add={() => props.add(ctrl.type)}
                            remove={() => props.remove(ctrl.type)}
                            disable={props.disabled[ctrl.type]}
                        />
                    );
                })
            }
            <button className={Styles.OrderButton} 
            disabled={!props.purchasable} 
            onClick={props.order}>
                ORDER NOW</button>
        </div>

    );
}
export default buildControls;