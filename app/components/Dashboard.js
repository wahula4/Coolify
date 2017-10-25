import React from "react";
// var top5 = require("../../public/billboard")

import { Card, CardTitle, Button, Col, Row } from 'react-materialize';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.dashSignIn=this.dashSignIn.bind(this)
    this.dashSignUp=this.dashSignUp.bind(this)
  }

  dashSignIn(){
    window.location.assign("./signin")
  }

  dashSignUp(){
    window.location.assign("./signup")
  }

    render(){
        return(


        <Row>
          <Col m={6} offset="m3">
            <div className='center'>
              <h1 className=' animated tada'>Welcome to Coolify!</h1>
              Been living under a rock? Feel super uncool? You're in the right place!
              <p></p>
              <Button style={{marginRight: 5}} className="green" type="submit" waves="light" onClick={this.dashSignIn}>Login</Button>
              <Button type="submit" waves="light" onClick={this.dashSignUp}>Signup</Button>
            </div>
          </Col>
          <img class="materialboxed" width="450" src="https://media.giphy.com/media/vEgtLzJo8n7qg/giphy.gif"></img>
        </Row>

        );

    }
}


export default Dashboard;
