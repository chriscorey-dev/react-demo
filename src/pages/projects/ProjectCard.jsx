import React, { Component } from "react";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="card m-2">
          <img
            className="card-img-top"
            src="https://picsum.photos/500/250/"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
