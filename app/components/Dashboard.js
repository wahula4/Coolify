import React from "react";

class Dashboard extends React.Component{

    render(){
        return(
            <div>
                <h3>Welcome to the Dashboard</h3>
                <a href='/login' class="btn btn-primary">Login</a>
                <a href='/signup' class="btn btn-primary">Signup</a>
            </div>
        );

    }
}

export default Dashboard
