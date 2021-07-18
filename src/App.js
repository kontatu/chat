import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";
import LoggedInRoute from "./LoggedInRoute";

import { AuthProbider } from "./AuthServise";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


const App = () => {
    return (
        <AuthProbider>
            <Router>
                <Switch>
                    < LoggedInRoute exact path="/" component={Room} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Router>
        </AuthProbider>
    )
}

export default App