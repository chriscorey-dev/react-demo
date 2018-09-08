import React, { Component } from "react";

class ScreenCheck extends Component {
  state = {};
  render() {
    return (
      <div className="text-light d-inline float-right">
        {/* <div className="container m-3 text-light"> */}
        <span className="d-block d-sm-none">Current Size: Extra-Small</span>
        <span className="d-none d-sm-block d-md-none">Current Size: Small</span>
        <span className="d-none d-md-block d-lg-none">
          Current Size: Medium
        </span>
        <span className="d-none d-lg-block d-xl-none">Current Size: Large</span>
        <span className="d-none d-xl-block">Current Size: Extra Large</span>
        {/* </div> */}
      </div>
    );
  }
}

export default ScreenCheck;
