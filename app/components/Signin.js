import React from "react";

class Signin extends React.Component{

    render(){
        return(
            <div>
                <h3>Please Sign In</h3>
                <form action="/signin" method="POST">
                    <input type="text" name="username"/><br/>
                    <input type="password" name="password"/><br/>

                    <input type="submit" value='Sign In'/>
                </form>
            </div>
        );

    }
}

export default Signin