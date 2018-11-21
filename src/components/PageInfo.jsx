import React, { Component } from "react";

class PageInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <a
          className="btn btn-outline-secondary"
          data-toggle="collapse"
          href="#what-is-this-page"
        >
          What is this page?
        </a>
        <br />
        <br />
        <div className="collapse" id="what-is-this-page">
          <div className="card card-body">{this.props.message}</div>

          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default PageInfo;
