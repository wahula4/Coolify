// Include React
import React from "react";
import Moment from "moment";

import {CardPanel, Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
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
    		<Col m={4}>
          <Collapsible accordion>
          	<CollapsibleItem header='Recent Searches' icon='filter_drama'>
              {this.props.history.map(function(search, i) {
                var formatted_date = Moment(search.date).format("MMM Do YYYY");
                  return (
                    <p key={i}>{search.word} - {formatted_date}</p>
                  );
              })}
          	</CollapsibleItem>
          </Collapsible>
    		</Col>
      </Row>
    );
  }
};

// Export the component back for use in other files
export default History;
