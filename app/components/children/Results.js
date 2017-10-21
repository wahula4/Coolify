import React from "react";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title text-center">Definition</h4>
        </div>
        <div className="panel-body text-center">
          <p>{this.props.definition}</p>
        </div>
      </div>
    );
  }
}
// Export the component back for use in other files
export default Results;
