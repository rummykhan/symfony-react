import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import history from './history';

import {
    Home,
    Tmp
} from '../views/index'

import Layout from '../views/Layout';

class Routes extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router history={history}>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/tmp" component={Tmp}/>
                </Layout>
            </Router>
        )
    }
}

export default Routes;