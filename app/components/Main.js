import React from "react";
// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import History from "./children/History";
// Helper Function
import helpers from "./utils/helpers";
// import billboardTop5 from "../../public/billboard"

import {Button, Modal, Parallax, Row, Col, Carousel, Preloader, Slider, Slide, Footer, Collection, CollectionItem } from 'react-materialize';

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
      userElement = <p className="user right">{this.state.email} <a type="submit" onClick={this.signout}>Signout</a></p>
    }
    else {
      userElement = <Preloader className="right" size='small'/>
    }

    return (
      <div>
        <div className="section white">
          {userElement}
      		<div className="row container center">

      			<h1 className="header animated bounceInDown">Coolify Yo'self</h1>
      			<h5 className="grey-text text-darken-3 lighten-3">Even parents can be cool</h5>

      		</div>
      	</div>
      	<Parallax imageSrc="https://img.buzzfeed.com/buzzfeed-static/static/2014-08/4/16/campaign_images/webdr02/21-reminders-you-had-the-cool-parents-growing-up-2-5133-1407184657-11_dblbig.jpg"
      />
      	<div className="section white">
      		<div className="row container">
            <h3 className="center">Confused by what the kids are saying? Find out here</h3>
            <Col m={4} className='grid-example'>
              <Form setTerm={(term) => this.setTerm(term)}
                updateHistoryWithNewSearch={(term) => this.updateHistoryWithNewSearch(term)} />
            </Col>
            <Col m={4} className='grid-example'>
              <Results definition={this.state.results} />
            </Col>

                <History history={this.state.history} />

      		</div>
      	</div>
      	<Parallax imageSrc="http://images5.fanpop.com/image/photos/30600000/Fonzie-arthur-fonzarelli-30631364-500-291.jpg"/>
        <div className="section white">
      		<div className="row container center">
            <h2>Top Songs Right Now</h2>
            <Collection>
            	<CollectionItem target='_blank' href = 'https://www.youtube.com/watch?v=_209r9TMB4M'>Rockstar - Post Malone featuring 21 Savage</CollectionItem>
            	<CollectionItem target='_blank' href = 'https://www.youtube.com/watch?v=PEGccV-NOm8'>Bodak Yellow - Cardi B</CollectionItem>
            	<CollectionItem target='_blank' href = 'https://www.youtube.com/watch?v=Kb24RrHIbFk'>1-800-273-8255 - Logic featuring Alessia Cara and Khalid</CollectionItem>
            	<CollectionItem target='_blank' href = 'https://www.youtube.com/watch?v=3tmd-ClpJxA'>Look What You Made Me Do - Taylor Swift</CollectionItem>
              <CollectionItem target='_blank' href = 'https://www.youtube.com/watch?v=pBkHHoOIIn8'>Feel it Still - Portugal. The Man</CollectionItem>
            </Collection>
      		</div>
      	</div>
        <div className="section white">
          <div className="row container center">
            <h2>People you should know</h2>
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
          <Footer copyrights="2017 Copyright"
          	moreLinks={
          		<a className="grey-text text-lighten-4 right" href="#!">Tony Wahula</a>
          	}
          	links={
          		<ul>
          			<li><a className="grey-text text-lighten-3" target='_blank' href="https://github.com/wahula4/ES6-Address">The Code</a></li>
          			<li><a className="grey-text text-lighten-3" target='_blank' href="www.linkedin.com/in/tony-wahula">LinkedIn</a></li>
          			<li><a className="grey-text text-lighten-3" target='_blank' href="tonywahula.com">Portfolio</a></li>
          		</ul>
          	}
          	className='example'>
          		<h5 className="white-text">Coolify Inc.</h5>
          		<p className="grey-text text-lighten-4">Coolify cannot guarantee you will acutally become cooler. Results may vary.</p>
          </Footer>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;
