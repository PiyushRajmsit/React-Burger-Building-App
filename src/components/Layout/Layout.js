import React from 'react';
import Aux from '../../hoc/Aux';
import Styles from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) =>(
    
    
    <Aux>
        <ToolBar/>
        <SideDrawer/>
        <main className={Styles.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;