import React, { Component } from "react";

import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

import Routes from "./Routes";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Routes />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
