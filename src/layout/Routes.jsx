import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/Home";
import Beer from "../pages/beer/Beer";
import Carousel from "../pages/carousel/Carousel";
import Projects from "../pages/projects/Projects";
import Demo from "../pages/demo/Demo";
import Parallax from "../pages/parallax/Parallax";
import Test from "../pages/test/Test";

import NotFound from "../pages/status-codes/404";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />

        <Route exact path="/beer/:beerPageId" component={Beer} />
        <Redirect exact path="/beer" to="/beer/1" />

        <Route exact path="/carousel" component={Carousel} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/parallax" component={Parallax} />
        <Route exact path="/test" component={Test} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
