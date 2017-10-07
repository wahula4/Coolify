// Inclue the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;
// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Reference the high-level components
var Main = require("./Main");
var Signup = require ("./Signup");
var Signin = require ("./Signin");
var Dashboard = require ("./Dashboard");


module.exports = (
    <Router history={hashHistory}>
       <Route path="/" component={Dashboard}>
         {/* If user selects Child1 then show the appropriate component*/}
         <Route path="login" component={Signin} >

         </Route>
         {/* If user selects Child2 then show the appropriate component*/}
         <Route path="signup" component={Signup} />
         {/* If user selects any other path... we get the Home Route */}
         <IndexRoute component={Main} />
       </Route>
    </Router>
);
