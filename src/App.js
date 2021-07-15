import React from "react";

import Login from "./Login";
import SingUp from "./SignUp";
import Room from "./Room";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import SignUp from "./SignUp";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Room} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    )
}

export default App