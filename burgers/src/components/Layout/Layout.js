import React from 'react';
import Wrapper from '../../hoc/Wrapper'

const layout = (props) => (
    <Wrapper>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;