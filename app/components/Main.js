import React from "react";
// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";
// Helper Function
import helpers from "./utils/helpers";

import {Button, Modal, Parallax, Row, Col } from 'react-materialize';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: ""
    };
    this.setTerm = this.setTerm.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");
      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
      });
    }
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
      			<h2 className="header">COOLIFY</h2>
      			<p className="grey-text text-darken-3 lighten-3">Parents can be cool too</p>
      		</div>
      	</div>
      	<Parallax imageSrc="https://img.buzzfeed.com/buzzfeed-static/static/2014-08/4/16/campaign_images/webdr02/21-reminders-you-had-the-cool-parents-growing-up-2-5133-1407184657-11_dblbig.jpg"/>
      	<div className="section white">
      		<div className="row container">
            <Col s={6} className='grid-example'>
              <Form setTerm={this.setTerm} />
            </Col>
            <Col s={6} className='grid-example'>
              <Results address={this.state.results} />
            </Col>
            {/* <Row>
            <History history={this.state.history} />
            </Row> */}
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        <div className="section white">
      		<div className="row container">
      			<h2 className="header">Songs cool people know</h2>
      			<p className="songs grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      		</div>
      	</div>
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="jumbotron">
      //       <h2 className="text-center">Address Finder!</h2>
      //       <p className="text-center">
      //         <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <Form setTerm={this.setTerm} />
      //     </div>
      //     <div className="col-md-6">
      //       <Results address={this.state.results} />
      //     </div>
      //   </div>
      // </div>
    );
  }
}
// Export the componen back for use in other files
export default Main;
