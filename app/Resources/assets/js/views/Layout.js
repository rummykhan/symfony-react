import React, {Component} from 'react';
import Header from './includes/Header';

//import Alert from 'react-s-alert';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
                {/*<Alert stack={{limit: 3}} />*/}
            </div>
        )
    }
}

export default Layout;