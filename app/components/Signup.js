import React from "react";

import {Button, Row, Input } from 'react-materialize';

class Signup extends React.Component{

    render(){
        return(
          <Row>
              <h3>Please Sign Up</h3>

              

              <form action="/signup" method="POST">
              <Input type="email" s={6} name="email" label="Email"/>
              <Input type="password" s={6} name="password" label="Password"/>
              <Button type="submit">Submit</Button>
              </form>
          </Row>
        );

    }
}

export default Signup;
