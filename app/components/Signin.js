import React from "react";

import {Button, Row, Input } from 'react-materialize';

class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.signin=this.signin.bind(this)
    this.emailchange=this.emailchange.bind(this)
    this.passwordchange=this.passwordchange.bind(this)
    this.user={email:"", password:""}
  }

  signin()
  {
    fetch('./signin', {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(this.user)
}).then(function(response) {
    console.log(response.status)
      if(response.ok) {
        window.location.assign("./main")
      }
      else if(response.status !== 304) {
        alert('shit')
      }
    })
    .catch(function(error) { console.log(error); });
  }

  emailchange(event)
  {
    this.user.email=event.target.value;
  }

  passwordchange(event)
  {
    this.user.password=event.target.value;
  }
    render(){
        return(
          <Row>
              <h3>Please Sign In</h3>
              <Input type="email" s={6} name="email" label="Email" onChange={this.emailchange}/>
              <Input type="password" s={6} name="password" label="Password" onChange={this.passwordchange}/>
              <Button type="submit" onClick={this.signin}>Submit</Button>
          </Row>
        );

    }
}

export default Signin;
