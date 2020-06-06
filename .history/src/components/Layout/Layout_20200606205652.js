import React from 'react';
import Aux from '../../hoc/Aux';
const layout = (props) =>(
    <Aux>
        <main>
            {props.children}
        </main>
    </Aux>
);