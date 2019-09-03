import React, { Fragment } from 'react';
import HeaderComponent from './header';
import HomePage from './home-page';
import FooterComponent from './footer';

const App = () => {
    return (
        <Fragment>
            <HeaderComponent />
            <HomePage />
            <FooterComponent />
        </Fragment>
    );
}

export default App;
