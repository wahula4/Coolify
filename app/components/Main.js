import React from "react";
// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import History from "./children/History";
// Helper Function
import helpers from "./utils/helpers";
// import billboardTop5 from "../../public/billboard"

import {Button, Modal, Parallax, Row, Col, Carousel, Preloader, Slider, Slide } from 'react-materialize';

class Main extends React.Component {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {
      searchTerm: "",
      results: "",
      history: []
    };
    fetch('/user', {
    method: "GET",
    headers: { "Content-Type" : "application/json" },
    credentials: "include"
  }).then(function(response) {
      console.log(response);
      response.json().then(function(json) {
        console.log(json);
        self.state.email = json.email;
      });
    });

    this.signout=this.signout.bind(this)
  }

  // The moment the page renders get the History
  componentDidMount() {
    var self = this;
    // Get the latest history.
    helpers.getHistory().then(function(response) {
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

  signout()
  {
    this.state.user = {};
    window.location.assign("/")
  }


  render() {
    var userElement;
    if (this.state.email) {
      userElement = <p className="user right">{this.state.email} <Button type="submit" onClick={this.signout}>Signout</Button></p>
    }
    else {
      userElement = <Preloader className="right" size='small'/>
    }

    return (
      <div>
        <div className="section white">
          {userElement}
      		<div className="row container center">
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
              <Results definition={this.state.results} />
            </Col>
            <Row>
            <History history={this.state.history} />
            </Row>
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        <div className="section white">
      		<div className="row container center">
      			<h2 className="header">Songs you should know</h2>
            <Carousel images={[
            	'https://lorempixel.com/250/250/nature/1',
            	'https://lorempixel.com/250/250/nature/2',
            	'https://lorempixel.com/250/250/nature/3',
            	'https://lorempixel.com/250/250/nature/4',
            	'https://fckwhatyouheard.files.wordpress.com/2011/04/betty-white.jpg'
            ]} />
      		</div>
      	</div>
        <div className="section white">
          <div className="row container center">
            <h1>People you should know</h1>
                <Slider>
                	<Slide
                		src="http://img.etonline.com/1242911076001/201604/2937/1242911076001_4848888244001_ET-BEYONCE-0416-horiz.jpg?pubId=1242911076001"
                		title="Beyonce"
                    placement="right">
                		Also known as Queen Bey.  One of the most powerful women in entertainment selling millions of music albums worldwide.
                	</Slide>
                	<Slide
                		src="http://22928-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2017/06/USATSI_10090701_168383719_lowres-640x427.jpg"
                		title="LeBron James"
                		placement="left">
                		Brought an NBA championship back to the city of Cleveland on his quest to become the GOAT.
                	</Slide>
                	<Slide
                		src="http://www.billboard.com/files/styles/480x270/public/media/taylor-swift-49th-billboard-1548.jpg"
                		title="Taylor Swift"
                		placement="right">
                		Country singer/songwriter turned pop star, she's known for singing about her personal life.
                	</Slide>
                </Slider>
          </div>
        </div>

      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;
