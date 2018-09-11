import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/Home";
import Carousel from "../pages/carousel/Carousel";
import Projects from "../pages/projects/Projects";
import Demo from "../pages/demo/Demo";
import Parallax from "../pages/parallax/Parallax";

import Beer from "../pages/beer/Beer";

import NotFound from "../pages/status-codes/404";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />

        <Route path="/carousel" component={Carousel} />
        <Route path="/demo" component={Demo} />
        <Route path="/projects" component={Projects} />
        <Route path="/parallax" component={Parallax} />

        <Redirect exact path="/beer" to="/beer/1" />
        <Route path="/beer/:beerPageId" component={Beer} />
        <div />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.beerPageId}</h3>
    <p>asdf</p>
  </div>
);

export default Routes;
