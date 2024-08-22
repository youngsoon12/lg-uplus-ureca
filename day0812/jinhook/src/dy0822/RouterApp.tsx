import React from 'react';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import { Route } from 'react-router-dom';

const RouterApp = () => {
    return (
        <div>
            <Header />
            <Main />
            <Product/>
        </div>
    );
};

export default RouterApp;