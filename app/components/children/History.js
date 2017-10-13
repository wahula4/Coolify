// Include React
import React from "react";
import Moment from "moment";

import {CardPanel, Row, Col } from 'react-materialize';
// This is the History component. It will be used to show a log of  recent searches.
class History extends React.Component {
  constructor(props) {
    super(props);
  }
  // Here we render the function
  render() {
    console.log(this.props.history)
    return (
      <Row>
    		<Col>
    				<CardPanel className="teal lighten-4 black-text">
    						<h1>History:</h1>
                {this.props.history.map(function(search, i) {
                  var formatted_date = Moment(search.date).format("MMM Do YYYY");
                    return (
                      <p key={i}>{search.location} - {formatted_date}</p>
                    );
                })}
    				</CardPanel>
    		</Col>
      </Row>
    );
  }
};

// Export the component back for use in other files
export default History;
