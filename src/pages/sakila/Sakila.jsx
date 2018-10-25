import React, { Component } from "react";
import Pagination from "../../components/Pagination";

// TODO: Setup authentication for posts for public api built on back end.

class Sakila extends Component {
  url = "https://api.chris-corey.com/api/sakila/film";
  state = {
    // url: "http://localhost:3001/api/sakila/film",
    // url: "https://api.chris-corey.com/api/sakila/film",
    data: null,
    isLoaded: false,

    search: "",

    itemsPerPage: 25,
    numPages: null
  };

  componentDidMount() {
    document.title = "Sakila";

    this.getAllFilms()
      .then(data => {
        this.setState({ data });

        this.setNumOfPages(this.state.data);

        this.setState({ isLoaded: true });
      })
      .catch(error => console.log(error));
  }

  getFilm = id => fetch(`${this.url}/${id}`).then(response => response.json());
  // TODO: Validate parameters

  putFilm = (film, body) =>
    // TODO: Validate parameters, make errors
    // TODO: validation is making some entries break. Fix it
    // Updates diffs in database with REST PUT statement
    fetch(`${this.url}/${film.film_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(body)
    }).then(res => res.json());

  postFilm = body =>
    fetch(`${this.url}`, {
      // method: "POST",
      // headers: {
      //   "Content-Type": "application/json; charset=utf-8"
      // },
      // body: JSON.stringify(body)
    }).then(console.log("post!"));

  deleteFilm = film => {
    const confirm = window.confirm(
      `Are you sure you want to delete film: ${film.title}`
    );
    if (!confirm) {
      return null;
    }
    // TODO: Validate parameters
    // if (body == {}) return false;

    fetch(`${this.url}/${film.film_id}`, {
      // method: "DELETE"
    }).then(console.log("delete!"));
  };

  setNumOfPages = data =>
    this.setState({
      numPages: Math.ceil(data.length / this.state.itemsPerPage)
    });

  getAllFilms = () => fetch(this.url).then(response => response.json());

  // Updates state's data with argument
  updateDataItem = (film, body) => {
    const dataIndex = this.state.data.findIndex(
      item => item.film_id === film.film_id
    );

    const item = this.state.data[dataIndex];
    Object.keys(body).forEach(key => {
      item[key] = body[key];
    });

    const data = this.state.data;
    data[dataIndex] = item;

    this.setState({ data });

    return film;
  };

  // Resets specified item to state's data value
  resetItem = film => {
    const reset = window.confirm(
      "All unsaved changes for this item will be lost. Reset item?"
    );

    if (!reset) {
      return null;
    }

    const fields = document
      .getElementById(`film-info-${film.film_id}`)
      .querySelectorAll("input, textarea, select");

    // Resets values
    fields.forEach((field, index) => {
      if (index !== 0) {
        // Checks for diffs. Not sure if better or worse. Look into
        // if (film[field.name] != field.value) {
        field.value = film[field.name];
        // }
      }
    });

    // Removes highlights
    this.removeAllHighlights(film.film_id);
  };

  // TODO: Check for changes on outside edit outline
  handleFieldChange = (film, event) => {
    const field = event.target;
    const fieldPill = field.parentElement;
    const title = document.getElementById(`film-info-${film.film_id}`)
      .parentElement;

    // If there is a diff, add highlight. If not remove it
    if (film[field.name] != field.value) {
      this.addClass(title, "border");
      this.addClass(fieldPill, "border");
    } else {
      this.removeClass(title, "border");
      this.removeClass(fieldPill, "border");
    }
  };

  addClass = (element, className) => {
    element.classList.add(className);
  };

  removeClass = (element, className) => {
    element.classList.remove(className);
  };

  removeAllHighlights = id => {
    const title = document.getElementById(`film-info-${id}`).parentElement;
    const fields = document
      .getElementById(`film-info-${id}`)
      .querySelectorAll("input, textarea, select");

    // Removes highlight for fields
    fields.forEach(field => {
      this.removeClass(field.parentElement, "border");
    });

    // Remove highlight for title
    this.removeClass(title, "border");
  };

  // // Updates search on field change
  // handleSearchChange = e => {
  //   const search = e.target.value;
  //   this.setState({ search });
  // };

  // Updates search on submit
  handleSearchSubmit = () => {
    const search = document.getElementById("search").value;
    this.setState({ search });

    // Sets state's page number. For pagination
    // TODO: Navigate to page 1 when searching
    if (
      this.state.data.filter(film =>
        film.title.toLowerCase().includes(search.toLowerCase())
      ).length === 0
    ) {
      this.setState({ numPages: 1 });
    } else {
      this.setNumOfPages(
        this.state.data.filter(film =>
          film.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  render() {
    const { data, isLoaded, itemsPerPage, numPages } = this.state;
    const { pageId } = this.props.match.params;

    // Checks data
    if (!isLoaded) {
      return (
        <div className="container">
          <p>Loading Films...</p>
        </div>
      );
    }

    // TODO: Edited items reset when user leaves the page
    // TODO: When items are created or deleted, update this info
    const itemRangeMin = itemsPerPage * (pageId - 1) + 1;
    const itemRangeMax = itemRangeMin + itemsPerPage - 1;

    // Checks for bad url
    if (pageId < 1 || pageId > numPages || isNaN(pageId)) {
      return (
        <div className="container">
          <Pagination badPage={true} url={this.props.match.url} />
        </div>
      );
    }

    return (
      <div className="container">
        <Pagination
          currPage={pageId}
          itemsPerPage={this.state.itemsPerPage}
          numPages={this.state.numPages}
          url="/sakila"
        />

        <button
          className="btn btn-outline-success btn-sm mr-1"
          onClick={() => {
            this.postFilm({ title: "New Title" });
          }}
        >
          New Entry
        </button>

        <div className="float-right">
          <form className="form-inline" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search by Title"
              id="search"
              // value={this.state.search}
              // onChange={e => this.handleSearchChange(e)}
            />
            <button
              className="btn btn-outline-primary btn-sm ml-1"
              type="submit"
              onClick={() => this.handleSearchSubmit()}
            >
              Search
            </button>
          </form>
        </div>

        {/* TODO: Save-all button? */}
        <div className="list-group mt-2 mb-2">
          {(() => {
            const dataFiltered = data.filter(film =>
              film.title.toLowerCase().includes(this.state.search.toLowerCase())
            );

            if (dataFiltered.length === 0) {
              return <p>No Search Results</p>;
            } else {
              return dataFiltered
                .slice(itemRangeMin - 1, itemRangeMax)
                .map(film => (
                  <FilmItem
                    film={film}
                    key={film.film_id}
                    putFilm={this.putFilm}
                    deleteFilm={this.deleteFilm}
                    handleFieldChange={this.handleFieldChange}
                    resetItem={this.resetItem}
                    updateDataItem={this.updateDataItem}
                    removeAllHighlights={this.removeAllHighlights}
                  />
                ));
            }
          })()}
        </div>

        <Pagination
          currPage={pageId}
          itemsPerPage={this.state.itemsPerPage}
          numPages={this.state.numPages}
          url="/sakila"
        />
      </div>
    );
  }
}

const FilmItem = props => {
  const {
    film,
    deleteFilm,
    putFilm,
    handleFieldChange,
    resetItem,
    updateDataItem,
    removeAllHighlights
  } = props;
  return (
    // TODO: Uncollapsed edited highlight looks messy
    <div key={film.film_id} className="rounded border-info">
      <a
        data-toggle="collapse"
        href={`#film-info-${film.film_id}`}
        className="list-group-item list-group-item-action"
        // className="list-group-item list-group-item-action rounded border-info"
      >
        {film.title}
      </a>

      <div className="collapse" id={`film-info-${film.film_id}`}>
        <div className="card card-body">
          {/* Film info form */}
          <div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">film_id</span>
              </div>
              <input
                type="text"
                disabled="disabled"
                className="form-control"
                placeholder="film_id"
                defaultValue={film.film_id}
                name="film_id"
              />
            </div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Title</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                defaultValue={film.title}
                name="title"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>

            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Description</span>
              </div>
              <textarea
                className="form-control"
                placeholder="Description"
                defaultValue={film.description}
                name="description"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>

            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor={`inputGroupSelect${film.film_id}`}
                >
                  Rating
                </label>
              </div>
              <select
                className="custom-select"
                id={`inputGroupSelect${film.film_id}`}
                defaultValue={film.rating}
                name="rating"
                onChange={e => handleFieldChange(film, e)}
              >
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="NC-17">NC-17</option>
                <option value="R">R</option>
              </select>
            </div>

            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Release Year</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Release Year"
                defaultValue={film.release_year}
                name="release_year"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Length</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Length"
                defaultValue={film.length}
                name="length"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Rental Duration</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Rental Duration"
                defaultValue={film.rental_duration}
                name="rental_duration"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Rental Rate</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Rental Rate"
                defaultValue={film.rental_rate}
                pattern="\d+(\.\d{2})?"
                name="rental_rate"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>
            <div className="input-group mb-1 rounded border-info">
              <div className="input-group-prepend">
                <span className="input-group-text">Replacement Cost</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Replacement Cost"
                defaultValue={film.replacement_cost}
                pattern="\d+(\.\d{2})?"
                name="replacement_cost"
                onChange={e => handleFieldChange(film, e)}
              />
            </div>

            <button
              className="btn btn-outline-primary btn-sm mr-1"
              onClick={() => {
                const elements = document
                  .getElementById(`film-info-${film.film_id}`)
                  // .getElementsByTagName // Maybe better
                  .querySelectorAll("input, textarea, select");

                const id = film.film_id;
                let body = {};

                elements.forEach((item, index) => {
                  if (index !== 0) {
                    // Checks for diffs, builds body variable with new data
                    if (film[item.name] != item.value) {
                      body[item.name] = item.value;
                    }
                  }
                });

                putFilm(film, body)
                  .then(res => updateDataItem(film, body))
                  // Removes highlights
                  .then(res => {
                    removeAllHighlights(film.film_id);
                    return res;
                  })
                  .catch(error => error);
              }}
            >
              Save
            </button>

            <button
              className="btn btn-outline-primary btn-sm mr-1"
              onClick={() => resetItem(film)}
            >
              Reset
            </button>

            <button
              className="btn btn-outline-danger btn-sm mr-1"
              onClick={() => deleteFilm(film)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sakila;
