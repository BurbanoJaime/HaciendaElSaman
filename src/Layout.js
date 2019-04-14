import React from 'react';

import Nav from './share/nav/Nav';
import Footer from './share/footer/Footer';

export default function Layout (props){

    return(
        <React.Fragment>
            <Nav />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}