import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

class NavBar extends Component {
  state = {};

  render() {
    closeSlider();

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-2">
        <Link to="/">
          <img
            className="navbar-brand"
            src="/images/bootstrap-solid.svg"
            height="50"
            alt="Brand Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-item nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-item nav-link" to="/beer">
              Beer List
            </NavLink>

            <NavLink className="nav-item nav-link" to="/api-demo">
              REST API
            </NavLink>

            <NavLink className="nav-item nav-link" to="/projects">
              Projects
            </NavLink>

            <NavLink className="nav-item nav-link" to="/carousel">
              Carousel
            </NavLink>

            <NavLink className="nav-item nav-link" to="/parallax">
              Parallax
            </NavLink>

            <NavLink className="nav-item nav-link" to="/demo">
              BS Demo
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

const closeSlider = () => {
  $("#navbarNavAltMarkup").collapse("hide");
};

export default NavBar;
