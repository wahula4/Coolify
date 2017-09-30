import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from "react-router";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";


const Routes = (
    <Router history={browserHistory}>
        <Route path="/">
            <Route path = "signin" component={Signin}/>
            <Route path = "dashboard" component={Dashboard}/>

            <IndexRoute component={Signup}/>
        </Route>
    </Router>
);

export default Routes;