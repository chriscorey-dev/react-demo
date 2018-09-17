import React, { Component } from "react";

class BeerCard extends Component {
  render() {
    const { beer } = this.props;
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2 mt-2">
        <div className="card">
          <div className="card-header">
            <img
              className="mr-3 float-left"
              src={beer.image_url}
              style={{
                height: "100px"
              }}
              alt={beer.name}
            />
            <h4 className="mb-0 font-weight-normal">{beer.name}</h4>
            <p
              className="card-text mt-0 font-italic"
              style={{ fontSize: ".85em" }}
            >
              {beer.tagline}
            </p>
          </div>

          <ul className="nav nav-fill nav-tabs" id="myTab">
            <li className="nav-item">
              <a
                href={`#link-1-${beer.id}`}
                className="nav-link active"
                id="home2-tab"
                data-toggle="tab"
              >
                Info
              </a>
            </li>
            <li className="nav-item">
              <a
                href={`#link-2-${beer.id}`}
                className="nav-link"
                id="profile2-tab"
                data-toggle="tab"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href={`#link-3-${beer.id}`}
                className="nav-link"
                id="contact2-tab"
                data-toggle="tab"
              >
                Food
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="card-body tab-pane fade show active pb-3 pt-2"
              id={`link-1-${beer.id}`}
            >
              <h5 className="font-weight-normal">Beer Info:</h5>
              <hr className="mt-0 mb-2" />
              <p className="mb-0">First Brewed: {`${beer.first_brewed}`}</p>
              <p className="">ABV: {`${beer.abv}%`}</p>
              <a
                className="btn btn-primary"
                href={`https://api.punkapi.com/v2/beers/${beer.id}`}
              >
                Buy Beer!
              </a>
            </div>
            <div
              className="card-body tab-pane fade pb-3 pt-2"
              id={`link-2-${beer.id}`}
            >
              <h5 className="font-weight-normal">Description:</h5>
              <hr className="mt-0 mb-2" />
              <p>{beer.description}</p>
            </div>
            <div
              className="card-body tab-pane fade pb-3 pt-2"
              id={`link-3-${beer.id}`}
            >
              <h5 className="font-weight-normal">Food pairings:</h5>
              <hr className="mt-0 mb-2" />
              <ul>
                {beer.food_pairing.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerCard;
