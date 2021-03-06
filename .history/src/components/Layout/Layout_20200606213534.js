import React from 'react';
import Aux from '../../hoc/Aux';
import Styles from './Layout.module.css'
const layout = (props) =>(
    <Aux>
        <main className={Styles.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;