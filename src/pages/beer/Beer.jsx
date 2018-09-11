import React, { Component } from "react";
import BeerCard from "./BeerCard";

class Beer extends Component {
  state = {
    data: {},
    isLoaded: false
  };
  componentDidMount() {
    const url = "https://api.myjson.com/bins/powmo";
    // const url = "https://api.punkapi.com/v2/beers/?page=1&per_page=80";
    // const url = "https://api.github.com/users/chriscorey-dev";
    // const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          data: response
        });
      });
  }
  render() {
    const { isLoaded, data } = this.state;

    // This line is so important!! It doesn't try to load ajax until it's ready.
    if (!isLoaded)
      return (
        <div className="container">
          <p>Loading Delicious...</p>
        </div>
      );
    return (
      <div class="container">
        <h3 className="m-2">Delicious Beer!</h3>
        <div className="row">
          {data.map(beer => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    );
  }
}

export default Beer;
