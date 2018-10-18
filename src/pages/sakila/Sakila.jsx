import React, { Component } from "react";
import Pagination from "../../components/Pagination";

// TODO: Setup authentication for posts for public api built on back end.

class Sakila extends Component {
  state = {
    // url: "http://localhost:3001/api/sakila/film",
    url: "https://api.chris-corey.com/api/sakila/film",
    data: null,

    itemsPerPage: 25,
    numPages: null
  };

  componentDidMount() {
    document.title = "Sakila";

    fetch(this.state.url)
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
      });
  }

  render() {
    const { data, url, itemsPerPage, numPages } = this.state;
    const { pageId } = this.props.match.params;

    const getFilm = id => {
      // TODO: Validate parameters
      // let useUrl = null;
      // if (id == null) {
      //   useUrl = `${url}/${id}`;
      // }

      fetch(url)
        .then(response => response.json())
        .then(response =>
          this.setState({
            data: response
          })
        );
    };

    const putFilm = (id, body) => {
      // TODO: Validate parameters
      // if (body == {}) return false;

      fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
      }).then(response => getFilm());
    };

    const postFilm = body => {
      fetch(`${url}`, {
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json; charset=utf-8"
        // },
        // body: JSON.stringify(body)
      })
        .then(console.log("post!"))
        .then(response => getFilm());
    };

    const deleteFilm = id => {
      // TODO: Validate parameters
      // if (body == {}) return false;

      fetch(`${url}/${id}`, {
        // method: "DELETE"
      })
        .then(console.log("delete!"))
        .then(response => getFilm());
    };

    const buildJSONFromForm = () => {};

    // Checks data
    if (!data) {
      return (
        <div className="container">
          <p>Loading Films...</p>
        </div>
      );
    }
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
          numItems={data.length}
          currPage={pageId}
          itemsPerPage={12}
          numPages={this.state.numPages}
          url="/sakila"
        />

        <button
          className="btn btn-outline-primary btn-sm mr-1"
          onClick={() => {
            getFilm();
          }}
        >
          GET
        </button>
        <button
          className="btn btn-outline-success btn-sm mr-1"
          onClick={() => {
            postFilm({ title: "New Title" });
          }}
        >
          POST
        </button>

        <div className="list-group mt-2">
          {data.slice(itemRangeMin - 1, itemRangeMax).map(film => (
            // <BeerCard key={beer.id} beer={beer} />
            <FilmItem film={film} deleteFilm={deleteFilm} putFilm={putFilm} />
          ))}
        </div>

        <Pagination
          numItems={data.length}
          currPage={pageId}
          itemsPerPage={12}
          numPages={this.state.numPages}
          url="/sakila"
        />
      </div>
    );
  }
}

const FilmItem = props => {
  const { film, deleteFilm, putFilm } = props;
  return (
    <div key={film.film_id}>
      <a
        data-toggle="collapse"
        href={`#film-info-${film.film_id}`}
        className="list-group-item list-group-item-action"
      >
        {film.title}
      </a>

      <div className="collapse" id={`film-info-${film.film_id}`}>
        <div className="card card-body">
          {/* Film info form */}
          <div>
            <div className="input-group mb-1">
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
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Title</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                defaultValue={film.title}
                name="title"
              />
            </div>
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Description</span>
              </div>
              <textarea
                className="form-control"
                placeholder="Description"
                defaultValue={film.description}
                name="description"
              />
            </div>
            <div className="input-group mb-1">
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
              >
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="NC-17">NC-17</option>
                <option value="R">R</option>
              </select>
            </div>

            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Release Year</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Release Year"
                defaultValue={film.release_year}
                name="release_year"
              />
            </div>
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Length</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Length"
                defaultValue={film.length}
                name="length"
              />
            </div>
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Rental Duration</span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Rental Duration"
                defaultValue={film.rental_duration}
                name="rental_duration"
              />
            </div>
            <div className="input-group mb-1">
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
              />
            </div>
            <div className="input-group mb-1">
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
              />
            </div>

            <button
              className="btn btn-outline-danger btn-sm float-right"
              onClick={() => {
                const confirm = window.confirm(
                  `Are you sure you want to delete film: ${film.title}`
                );
                if (confirm) {
                  deleteFilm(film.film_id);
                }
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-outline-primary btn-sm float-right mr-1"
              onClick={() => {
                const elements = document
                  .getElementById(`film-info-${film.film_id}`)
                  .querySelectorAll("input, textarea, select");

                let id = null;
                let body = {};

                elements.forEach((item, index) => {
                  if (index === 0) {
                    id = item.value;
                  } else {
                    // Checks for diffs
                    if (film[item.name] != item.value) {
                      body[item.name] = item.value;
                    }
                  }
                });

                // console.log(id);
                // console.log(body);

                putFilm(id, body);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sakila;
