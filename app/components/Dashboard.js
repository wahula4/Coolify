import React from "react";

import { Card, CardTitle, Button, Col, Row } from 'react-materialize';

class Dashboard extends React.Component{

    render(){
        return(
        <Row>
          <Col m={6} offset="m3">
              <Card className='center medium'
              header={<CardTitle image='http://materializecss.com/images/parallax2.jpg'>Welcome</CardTitle>}
              actions={[<Button className="green" node='a' href='/signin' waves="light">Login</Button>,
                        <Button node='a' href='/signup' waves="light">Signup</Button>]}>
              Log in or sign up to learn!
            </Card>
          </Col>
        </Row>
        );

    }
}

export default Dashboard;
