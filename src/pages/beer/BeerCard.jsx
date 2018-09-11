import React, { Component } from "react";

class BeerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { beer } = this.props;
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div className="card m-2" style={{ height: "400px" }}>
          <img
            className="card-img-top ml-3 mt-3"
            src={beer.image_url}
            style={{ width: "50px" }}
            // style={{ height: "100px" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <p>{beer.tagline}</p>

            {/* <p className="card-text">{beer.description}</p> */}
            <button className="btn btn-primary">Buy Beer</button>
            <button className="btn btn-link text-secondary dropdown-toggle">
              More Info
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerCard;
