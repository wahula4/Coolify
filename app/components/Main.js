import React from "react";
// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import History from "./children/History";
// Helper Function
import helpers from "./utils/helpers";

import {Button, Modal, Parallax, Row, Col, Carousel } from 'react-materialize';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: "",
      history: []
    };
  }

  // The moment the page renders get the History
  componentDidMount() {
    var self = this;
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      // console.log("getHistory response:");
      // if (response !== this.state.history) {
      //   console.log("History", response.data);
      self.setState({ history: response.data });
      // }
    });
  }

  // If the component changes (i.e. if a search is entered)...
  updateHistoryWithNewSearch(term) {
    var self = this;
    console.log("term: ", term)
    // Run the query for the address
    helpers.runQuery(term).then(function(data) {
      // if (data !== self.state.results) {
        self.setState({ results: data });
        // After we've received the result... then post the search term to our history.
        helpers.postHistory(term).then(function() {
          // console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            // console.log("History", response.data);
            self.setState({ history: response.data });

          });
        });
      // }
    });
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {
    return (
      <div>
        <div className="section white">
      		<div className="row container">
            {/* <p>{this.state.user.email}</p> */}
            <p id="user-email"></p>
      			<h2 className="header">COOLIFY</h2>
      			<p className="grey-text text-darken-3 lighten-3">Parents can be cool too</p>
      		</div>
      	</div>
      	<Parallax imageSrc="https://img.buzzfeed.com/buzzfeed-static/static/2014-08/4/16/campaign_images/webdr02/21-reminders-you-had-the-cool-parents-growing-up-2-5133-1407184657-11_dblbig.jpg"/>
      	<div className="section white">
      		<div className="row container">
            <Col s={6} className='grid-example'>
              <Form setTerm={(term) => this.setTerm(term)}
                updateHistoryWithNewSearch={(term) => this.updateHistoryWithNewSearch(term)} />
            </Col>
            <Col s={6} className='grid-example'>
              <Results address={this.state.results} />
            </Col>
            <Row>
            <History history={this.state.history} />
            </Row>
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        <div className="section white">
      		<div className="row container">
      			<h2 className="header">Songs cool people know</h2>
            <Carousel images={[
            	'https://lorempixel.com/250/250/nature/1',
            	'https://lorempixel.com/250/250/nature/2',
            	'https://lorempixel.com/250/250/nature/3',
            	'https://lorempixel.com/250/250/nature/4',
            	'https://lorempixel.com/250/250/nature/5'
            ]} />
      		</div>
      	</div>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;
