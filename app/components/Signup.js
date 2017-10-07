import React from "react";

class Signup extends React.Component{

    render(){
        return(
            <div>
                <h2>Please sign up</h2>
                <form action="/signup" method="POST">
                    <input type="email" name="email"/><br/>
                    <input type="password" name="password"/><br/>

                    <input type="submit" value='Sign Up'/>
                </form>
            </div>
        );

    }
}

export default Signup
