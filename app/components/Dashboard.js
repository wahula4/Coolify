import React from "react";

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
              <Card className='center medium'
              header={<CardTitle image='http://materializecss.com/images/parallax2.jpg'>Welcome</CardTitle>}
              actions={[<Button className="green" type="submit" waves="light" onClick={this.dashSignIn}>Login</Button>,
                        <Button type="submit" waves="light" onClick={this.dashSignIn}>Signup</Button>]}>
              Log in or sign up to learn!
            </Card>
          </Col>
        </Row>
        );

    }
}

export default Dashboard;
