import React from "react";

import {Button, Row, Input } from 'react-materialize';

class Signin extends React.Component{

    render(){
        return(
          <Row>
              <h3>Please Sign In</h3>
              <form action="/signin" method="POST">
                  <Input type="email" s={6} name="email" label="Email"/>
                  <Input type="password" s={6} name="password" label="Password"/>
                  <Button type="submit">Submit</Button>
              </form>
          </Row>
        );

    }
}

export default Signin;
