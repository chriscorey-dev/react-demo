import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    document.title = "404 - Not Found";
  }

  render() {
    return (
      <div className="container">
        <h3>
          404 - <span className="font-weight-light">Page not Found</span>
        </h3>
        <div>{this.props.message}</div>
        <Link to="/">Return to homepage</Link>
      </div>
    );
  }
}

export default NotFound;
