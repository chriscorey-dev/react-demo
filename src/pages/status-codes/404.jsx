import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3>404 Not Found</h3>
        <Link to="/">Return to homepage</Link>
      </div>
    );
  }
}

export default NotFound;
