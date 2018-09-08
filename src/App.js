import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Layout from "./layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;

// import Routes from "./layout/Routes";
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/no-layout/" component={Routes} />
//           <Route exact strict path="/user/:username" component={user} />

//           <Layout />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
// const user = ({ match }) => <div>{match.params.username}</div>;
