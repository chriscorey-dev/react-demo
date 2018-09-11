import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center text-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-7 col-sm-6 col-md">
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
                <div className="col">
                  <a
                    href="#"
                    // target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="face-link"
                  />
                </div>
                <div className="col">
                  <a
                    href="https://medium.com/@chriscorey_dev"
                    target="_blank"
                    className="col"
                    style={{ top: "20%" }}
                    id="medium-link"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <span>
                Copyright &copy;
                {new Date().getFullYear()}
                <span className="d-none d-sm-inline"> Chris Corey</span>
              </span>
            </div>

            <div className="col-md d-none d-md-block">
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
                  <a className="dropdown-item" href="#">
                    Email
                  </a>
                  <a className="dropdown-item" href="#">
                    Phone
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
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
