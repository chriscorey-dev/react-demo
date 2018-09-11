import React, { Component } from "react";
import BeerCard from "./BeerCard";
import Pagination from "../../components/Pagination";
import { Route } from "react-router-dom";

class Beer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: {},
    isLoaded: false,
    currPage: 1,
    itemsPerPage: 9,
    numPages: 1
    // itemsPerPage: 9
  };
  componentDidMount() {
    const url = "https://api.myjson.com/bins/powmo";
    // const url = "https://api.punkapi.com/v2/beers/?page=1&per_page=80";
    // const url = "https://api.punkapi.com/v2/beers/?page=1";
    // const url = "https://api.github.com/users/chriscorey-dev";
    // const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          data: response
        });
      })
      .then(res => {
        // Calculating number of pages
        const numPages = Math.ceil(
          parseInt(this.state.data.length) / parseInt(this.state.itemsPerPage)
        );
        // console.log(parseInt(numPages));
        this.setState({ numPages: numPages });
      });
  }
  render() {
    const { isLoaded, data } = this.state;

    // This line is so important!! It doesn't try to load ajax until it's ready.
    if (!isLoaded) {
      return <p>Loading Delicious...</p>;
    }

    // const itemRangeMax = this.state.itemsPerPage * this.props.match.params.beerPageId;
    const itemRangeMax =
      this.state.itemsPerPage * this.props.match.params.beerPageId >=
      this.state.data.length
        ? this.state.data.length
        : this.state.itemsPerPage * this.props.match.params.beerPageId;
    const itemRangeMin = itemRangeMax - this.state.itemsPerPage + 1;

    return (
      <div className="container">
        {/* <p>Item range: {itemRangeMin + " - " + itemRangeMax}</p>
        <p>
          asdfasdfssdf
          {this.props.match.params.beerPageId}
        </p>
        <p>{this.state.data.length}</p> */}
        {/* <p>Num pages: {this.state.numPages}</p> */}
        {/* <p>{JSON.stringify(this.props)}</p> */}
        {/* <p>Location: {JSON.stringify(this.props.location)}</p> */}
        <Pagination
          numItems={this.state.data.length}
          // currentPage={this.props.match.params.beerPageId}
          // currPage={this.state.currPage}
          itemsPerPage={this.state.itemsPerPage}
          // url={this.props.match.url}
          url="/beer"
        />

        <h3 className="m-2">Delicious Beer!</h3>
        <div className="row">
          {data
            .filter(beer => beer.id >= itemRangeMin && beer.id <= itemRangeMax)
            .map(beer => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
        </div>
      </div>
    );
  }
}

export default Beer;
