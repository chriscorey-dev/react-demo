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
              alt={`Image of ${beer.name}`}
            />
            <h4 className="mb-0">{beer.name}</h4>
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
                Recipe
              </a>
            </li>
          </ul>
          {/* </div> */}
          <div className="tab-content" id="myTabContent">
            <div
              className="card-body tab-pane fade show active pb-3 pt-2"
              id={`link-1-${beer.id}`}
            >
              <h5>Beer Info:</h5>
              <hr className="mt-0 mb-2" />
              <p className="mb-0">First Brewed: {`${beer.first_brewed}`}</p>
              <p className="">ABV: {`${beer.abv}%`}</p>
              <button className="btn btn-primary">Buy Beer!</button>
              {/* <p className="m-0">hello world</p>
              <p className="m-0">hello world</p>
              <p className="m-0">hello world</p>
              <p className="m-0">hello world</p> */}
            </div>
            <div className="card-body tab-pane fade" id={`link-2-${beer.id}`}>
              <h5>Description:</h5>
              <hr className="mt-0 mb-2" />
              <p>{beer.description}</p>
            </div>
            <div className="card-body tab-pane fade" id={`link-3-${beer.id}`}>
              <h5>How to make</h5>
              <p>
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerCard;
