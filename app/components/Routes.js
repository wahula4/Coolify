import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Main from './Main';
import Signin from './Signin';

const Routes = () => (
    <Router history={browserHistory}>
       {/* <Route path="/" component={Dashboard}> </Route> */}
       <Route path="/signin" component={Signin}> </Route>
       <Route path="/" component={Main}> </Route>
       <Route path="/signup" component={Signup}> </Route>
    </Router>
);

export default Routes;
