import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/umd/popper.min.js'
//import './custom.css';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js'

import Dashboard from "./components/dashboard.js"
import Help from "./components/help.js"
import ElectionForm from "./components/election_form.js"
import VoterForm from "./components/voter_form.js"
import ElectionVoterForm from "./components/election_voter_form.js"
import ElectionDetail from "./components/election_detail.js"
import ElectionResult from "./components/election_result.js"
import Login from "./components/login.js"
import Register from "./components/register.js"
import ResetPassword from "./components/reset_password.js"
import NewPassword from "./components/new_password.js"
import Menu from "./components/menu.js"
import config from "react-global-configuration";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/log-in" component={Login}/>
                    <Route path="/sign-up" component={Register}/>
                    <Route path="/reset_password" component={ResetPassword}/>
                    <Route path="/new_password" component={NewPassword}/>
                    <Route exact path="/" component={ElectionForm}/>
                    <Route path="/election_detail" component={ElectionDetail}/>
                    <Route path="/election_finalize" component={ElectionVoterForm}/>
                    <Route path="/vote" component={VoterForm}/>
                    <Route path="/election_result"   component={ElectionResult}/>
                    <Route path="/help"   component={Help}/>
                </div>
            </Router>
        )
    }
    ;
}

export default App;
