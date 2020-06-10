import React from 'react';
import Styles from './Logo.module.css';
import BurgerLogo from '../../assets/Burger.png';


const logo = () =>{

    return(<div className={Styles.Logo}>
        <img src={BurgerLogo} alt='My-Burger'/>
    </div>);

}

export default logo;