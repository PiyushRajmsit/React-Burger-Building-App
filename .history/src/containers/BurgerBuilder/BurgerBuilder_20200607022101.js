import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../components/Burger/Burger'

class BurgerBuilder extends Component{


    render(){
        return(
            <Aux>
                <div>Burger</div>
                <div>BuildControls</div>
            </Aux>


        );
    }

} 

export default BurgerBuilder;