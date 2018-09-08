import React, { Component } from "react";

import "./Carousel.css";

// TODO: Dynamic carousel!
// Be able to add and remove images and text and links to a carousel dynamically. Possible?

class Carousel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico"
          rel="stylesheet"
          type="text/css"
        />

        {/* Carousel */}
        <div id="carousel1" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" className="active" />
            <li data-target="#carousel1" data-slide-to="1" />
            <li data-target="#carousel1" data-slide-to="2" />
          </ol>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block"
                src="https://picsum.photos/1920/500/?random"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Amazing Backgrounds</h1>
                <p>Thousands of Backgrounds for Free</p>
                <p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Get them Now
                  </a>
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="d-block"
                src="https://picsum.photos/1921/500/?random"
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Thousands of Colors</h1>
                <p>Every Color you can Imagine</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="d-block"
                src="https://picsum.photos/1922/500/?random"
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Amazing Illustrations</h1>
                <p>And they are all free</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <a
            className="carousel-control-prev"
            href="#carousel1"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel1"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
