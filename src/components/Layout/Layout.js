import React from 'react';
import Aux from '../../hoc/Aux';
import Styles from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';


const layout = (props) =>(
    
    
    <Aux>
        <ToolBar/>
        <main className={Styles.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;