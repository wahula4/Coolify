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
          <h1>hello</h1>
          <Col m={6} offset="m3">
              {/* <Card className='center medium'
              header={<CardTitle image='./images/rock.jpg'>Welcome</CardTitle>}
              actions={[<Button className="green" type="submit" waves="light" onClick={this.dashSignIn}>Login</Button>,
                        <Button type="submit" waves="light" onClick={this.dashSignIn}>Signup</Button>]}>
              Been living under a rock? You're in the right place!
            </Card> */}
          </Col>
        </Row>
        );

    }
}

export default Dashboard;
