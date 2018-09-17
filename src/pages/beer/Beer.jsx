import React, { Component } from "react";
import BeerCard from "./BeerCard";
import Pagination from "../../components/Pagination";

//TODO: Pagination on last page includes items from previous page
//TODO: Pagination truncation
//TODO: Check state, make sure everything is concise and necessary

class Beer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    data: {},
    isLoaded: false,
    itemsPerPage: 12, // This variable may be set to user input in the future.
    numPages: 1
  };
  componentDidMount() {
    // const url = "https://api.myjson.com/bins/powmo";
    const url = "https://api.punkapi.com/v2/beers/?page=1&per_page=80";

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
    const { isLoaded, data } = this.state;

    // This line is so important!! It doesn't try to load ajax until it's ready.
    if (!isLoaded) {
      return (
        <div className="container">
          <p>Loading Delicious...</p>
        </div>
      );
    }

    const itemRangeMax =
      this.state.itemsPerPage * this.props.match.params.beerPageId >=
      this.state.data.length
        ? this.state.data.length
        : this.state.itemsPerPage * this.props.match.params.beerPageId;
    const itemRangeMin = itemRangeMax - this.state.itemsPerPage + 1;

    if (
      this.props.match.params.beerPageId < 1 ||
      this.props.match.params.beerPageId > this.state.numPages
    ) {
      // return <div className="container">bad</div>;
      return (
        <div className="container">
          <Pagination
            currPage={this.props.match.params.beerPageId}
            badPage={true}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <h3 className="m-2">Delicious Beer!</h3>
        <Pagination
          numItems={this.state.data.length}
          currPage={this.props.match.params.beerPageId}
          itemsPerPage={this.state.itemsPerPage}
          numPages={this.state.numPages}
          url="/beer"
        />

        <div className="row">
          {data
            .filter(beer => beer.id >= itemRangeMin && beer.id <= itemRangeMax)
            .map(beer => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
        </div>

        <Pagination
          numItems={this.state.data.length}
          currPage={this.props.match.params.beerPageId}
          itemsPerPage={this.state.itemsPerPage}
          numPages={this.state.numPages}
          url="/beer"
        />
      </div>
    );
  }
}

export default Beer;
