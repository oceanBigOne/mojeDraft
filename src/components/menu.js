import React, {Component} from "react";
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            candidates: [],
            candidateInputFieldId: 0,
            candidateInputFields: [],
            rates: [],
            rateInputFieldId: 0,
            rateInputFields: [],
            voterInput: []
        }
    }

    user_disconnect() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.assign('/log-in');
    }

    render() {
        return (

                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light shadow">

                                <Link to={`/dashboard`} className="navbar-brand">
                                    <img src="/brand.svg" alt="logo" height="32"/>
                                </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">



                            </div>
                        {localStorage.getItem('username') ? (
                            <ul className="navbar-nav pull-right">
                                <li role="presentation" className="dropdown">
                                    <a href="/help" className="dropdown-toggle info-number"
                                       data-toggle="dropdown"
                                       aria-expanded="false">
                                        <i className="fa fa-question"></i>
                                    </a>
                                </li>
                                <li role="presentation" className="dropdown">
                                    <a href="#" onClick={this.user_disconnect} className="dropdown-toggle info-number"
                                       data-toggle="dropdown"
                                       aria-expanded="false">
                                        <i className="fa fa-sign-out"></i>
                                    </a>
                                </li>
                                <li>
                                    <Link to={`/dashboard`}>
                                        <i className="fa fa-user"></i> {String(localStorage.getItem('username'))}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/`}><i className="fa fa-plus"></i> Nouveau scrutin</Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ">
                                <li role="presentation" className="nav-item" >
                                    <Link to={`/log-in`} className="btn-sm btn btn-primary">Connexion</Link>
                                </li>
                            </ul>
                        )}
                        </div>
                    </nav>

        );
    }
}

export default Menu;
