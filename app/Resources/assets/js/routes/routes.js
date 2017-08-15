import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import history from './history';


import {
    Home,
    Layout
} from '../views/index';

const Routes = () => (
    <Router history={history}>
        <Layout>
            <Route exact path="/" component={Home}/>
        </Layout>
    </Router>
);

export default Routes;