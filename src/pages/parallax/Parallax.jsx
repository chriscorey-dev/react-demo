import React, { Component } from "react";

import "./Parallax.css";

class Parallax extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="imgs" id="img01">
          <div
            style={{
              position: "relative",
              backgroundColor: "#383838",
              height: "10%",
              top: "10%"
            }}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#383838",
              height: "10%",
              top: "20%"
            }}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#383838",
              height: "10%",
              top: "30%"
            }}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#383838",
              height: "10%",
              top: "40%"
            }}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#383838",
              height: "10%",
              top: "50%"
            }}
          />
        </div>
        <div className="imgs" id="img02" />

        <div className="jumbotron m-0 text-center text-light bg-secondary">
          <h4>This tron is jumbo</h4>
          <p>And this page chillaxin and parallaxin</p>
          <button className="btn btn-outline-dark text-light btn-sm">
            This button does nothing lol
          </button>
        </div>

        <div className="imgs" id="img03" />
      </div>
    );
  }
}

export default Parallax;
