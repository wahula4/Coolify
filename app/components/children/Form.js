import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      "term": event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var term = this.state.term
    this.props.setTerm(term);
    // this.setState({ term: "" });
    this.props.updateHistoryWithNewSearch(term);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title text-center">Say What?</h4>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={(event) => { this.handleSubmit(event) }}>
            <div className="form-group">
              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                type="text"
                className="form-control text-center"
                id="term"
                value={this.state.term}
                onChange={(event) => { this.handleChange(event) } }
                required
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
