import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center text-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-7 col-md">
              <div className="row">
                <div className="col">
                  <a
                    href="https://twitter.com/chriscorey_dev"
                    target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="twit-link"
                  />
                </div>

                {/* <div className="col">
                  <a
                    href="#"
                    // target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="face-link"
                  />
                </div> */}

                <div className="col">
                  <a
                    href="https://medium.com/@chriscorey_dev"
                    target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="medium-link"
                  />
                </div>

                <div className="col">
                  <a
                    href="https://stackoverflow.com/users/10266883/chris-corey"
                    target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="oflow-link"
                  />
                </div>
              </div>
            </div>

            <div className="col-md d-none d-md-block">
              <span>
                {/* Copyright &copy; */}
                &copy; {new Date().getFullYear()} Chris Corey
              </span>
            </div>

            {/* <div className="col-md d-none d-md-block"> */}
            <div className="col-5 col-md">
              <div className="dropup">
                <button
                  className="btn btn-link text-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  Contact Me
                </button>

                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="mailto:chris.corey95@gmail.com"
                  >
                    {/* Email */}
                    chris.corey95@gmail.com
                  </a>
                  <a className="dropdown-item" href="tel:5124975480">
                    {/* Phone */}
                    (512) 497-5480
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
