import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/">App</Link>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    User <span className="caret"/>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;