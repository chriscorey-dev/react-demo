import React, { Component } from "react";
import BeerCard from "./BeerCard";
import Pagination from "../../components/Pagination";

// TODO: Pagination truncation
// TODO: Check state, make sure everything is concise and necessary
// TODO: Debating how much work each module (beer & pagination) will do for pagination and page number handling.
//       And debating if an entire new module is necessary for page number handling

class Beer extends Component {
  state = {
    data: null,
    isLoaded: false,
    itemsPerPage: 12, // This variable may be set to user input in the future.
    numPages: null
  };
  componentDidMount() {
    // const url = "https://api.myjson.com/bins/powmo";
    // const url = "https://api.punkapi.com/v2/beers/?page=1&per_page=80";
    const url = "https://api.punkapi.com/v2/beers/?page=2&per_page=80";
    // const url = "https://api.punkapi.com/v2/beers/?page=3&per_page=80";

    // const url = "https://api.punkapi.com/v2/beers/?page=1";
    // const url = "https://api.github.com/users/chriscorey-dev";
    // const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .then(res => {
        // Calculating number of pages
        const numPages = Math.ceil(
          this.state.data.length / this.state.itemsPerPage
        );
        this.setState({ numPages: numPages });
      })
      .then(res => {
        this.setState({ isLoaded: true });
      });
  }
  render() {
    const { isLoaded, data, itemsPerPage } = this.state;
    const { beerPageId } = this.props.match.params;

    // This line is so important!! It doesn't try to load ajax until it's ready.
    if (!isLoaded) {
      return (
        <div className="container">
          <p>Loading Delicious...</p>
        </div>
      );
    }

    const itemRangeMin = itemsPerPage * (beerPageId - 1) + 1;
    const itemRangeMax = itemRangeMin + itemsPerPage - 1;

    // Checks for bad url
    if (
      beerPageId < 1 ||
      beerPageId > this.state.numPages ||
      isNaN(beerPageId)
    ) {
      return (
        <div className="container">
          <Pagination badPage={true} url={this.props.match.url} />
        </div>
      );
    }

    return (
      <div className="container">
        <h3 className="m-2">Delicious Beer!</h3>
        <Pagination
          numItems={data.length}
          currPage={beerPageId}
          itemsPerPage={itemsPerPage}
          numPages={this.state.numPages}
          url="/beer"
        />

        <div className="row">
          {data.slice(itemRangeMin - 1, itemRangeMax).map(beer => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>

        <Pagination
          numItems={data.length}
          currPage={beerPageId}
          itemsPerPage={itemsPerPage}
          numPages={this.state.numPages}
          url="/beer"
        />
      </div>
    );
  }
}

export default Beer;
