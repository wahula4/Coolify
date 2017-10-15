import React from "react";

import {Button, Row, Input, Col } from 'react-materialize';

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
    console.log(response)
      if(response.ok)
      {
        // fetch('/user', {
      //   method: "GET",
      //   headers: { "Content-Type" : "application/json" },
      //   credentials: "include"
      // }).then(function(response) {
      //   console.log(response)
      //   response.json().then(function(json) {
      //     console.log(json);
      //   });
      // });
      window.location.assign("./main")
      }
      else if(response.status !== 304) {
        alert('Incorrect email or password')
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
            <Col m={6} offset="m3">
              <h3 className="center">Please Sign In</h3>
              <Input type="email" s={6} name="email" label="Email" onChange={this.emailchange}/>
              <Input type="password" s={6} name="password" label="Password" onChange={this.passwordchange}/>
              <Button className="green" type="submit" onClick={this.signin}>Submit</Button>
            </Col>
          </Row>
        );

    }
}

export default Signin;

// import React from "react";
//
// import {Button, Row, Input } from 'react-materialize';
//
// class Signin extends React.Component{
//
//     render(){
//         return(
//           <Row>
//               <h3>Please Sign In</h3>
//                 <form action="/signin" method="POST">
//                   <Input type="email" s={6} name="email" label="Email"/>
//                   <Input type="password" s={6} name="password" label="Password"/>
//                   <Button type="submit">Submit</Button>
//                 </form>
//           </Row>
//         );
//
//     }
// }
//
// export default Signin;
