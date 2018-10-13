import React, { Component } from "react";
import BeerCard from "./BeerCard";
import Pagination from "../../components/Pagination";

// TODO: Check state, make sure everything is concise and necessary
// TODO: Debating how much work each module (beer & pagination) will do for pagination and page number handling.
//       And debating if an entire new module is necessary for page number handling
// TODO: Store data and pass the necessary information to where it needs to go. (pagination pages, details page)
//       Dont' re-get the json. It can bog things down if you do it too much.
//       Like android development

class Beer extends Component {
  state = {
    data: null,
    isLoaded: false,
    // itemsPerPage: 12, // This variable may be set to user input in the future.
    itemsPerPage: 9,
    numPages: null
  };
  componentDidMount() {
    document.title = "Beer List";

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

    // const numPages = Math.ceil(
    //   this.state.data.length / this.state.itemsPerPage
    // );
    // this.setState({ numPages: numPages });

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
        {/* <h4 className="m-2">What is this?</h4> */}
        <a
          className="btn btn-outline-secondary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          What is this page?
        </a>
        <br />
        <br />
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            This is a template for viewing and buying beer from Brewdog's DIY
            beer using Punk API. The panels display technical information about
            the beer, a description, and an option to buy it. I'm using the Punk
            API to get the data and Bootstrap for the front end.
            <a href="https://punkapi.com/">Punk API</a>
            <a href="https://www.brewdog.com/">Brewdog</a>
          </div>

          <br />
        </div>

        <Pagination
          numItems={data.length}
          currPage={beerPageId}
          itemsPerPage={itemsPerPage}
          numPages={this.state.numPages}
          url="/beer"
        />

        {/* <input
          type="number"
          value={this.state.itemsPerPage}
          onChange={event => {
            this.setState({ itemsPerPage: event.target.value });
          }}
        /> */}

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
          collapsable={true}
        />
      </div>
    );
  }
}

export default Beer;
