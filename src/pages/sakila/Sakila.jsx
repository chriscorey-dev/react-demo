import React, { Component } from "react";
import Pagination from "../../components/Pagination";

// TODO: Setup authentication for posts for public api built on back end.

class Sakila extends Component {
  state = {
    // url: "http://localhost:3001/api/sakila/film",
    url: "https://api.chris-corey.com/api/sakila/film",
    data: null,
    isLoaded: false,

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
      })
      .then(res => this.setState({ isLoaded: true }));
  }

  render() {
    const { data, url, isLoaded, itemsPerPage, numPages } = this.state;
    const { pageId } = this.props.match.params;

    // Checks data
    if (!isLoaded) {
      return (
        <div className="container">
          <p>Loading Films...</p>
        </div>
      );
    }

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

    const getFilm = id => {
      return new Promise((resolve, reject) => {
        // TODO: Validate parameters

        fetch(`${url}/${id}`)
          .then(response => response.json())
          // Updates state's data with response from database
          .then(film => {
            const dataIndex = data.findIndex(film => film.film_id === id);

            this.setState((data[dataIndex] = film));

            return film;
          })
          .then(film => resolve(film));
      });
    };

    const putFilm = (film, body) => {
      //   // TODO: Validate parameters, make errors
      //   // if (body == {}) return false;

      const id = film.film_id;

      return new Promise((resolve, reject) => {
        // Updates diffs in database with REST PUT statement
        fetch(`${url}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          // Updates this.state.data with current and returns modified film object. This is important
          .then(res => {
            const dataIndex = data.findIndex(item => item.film_id === id);
            this.setState((data[dataIndex] = res));
            return res;
          })
          // Removes highlights
          .then(res => {
            removeAllHighlights(id);
            return res;
          })
          .then(res => resolve(res));
      });
    };

    const postFilm = body => {
      fetch(`${url}`, {
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json; charset=utf-8"
        // },
        // body: JSON.stringify(body)
      }).then(console.log("post!"));
    };

    const deleteFilm = film => {
      const confirm = window.confirm(
        `Are you sure you want to delete film: ${film.title}`
      );
      if (!confirm) {
        return null;
      }
      // TODO: Validate parameters
      // if (body == {}) return false;

      fetch(`${url}/${film.film_id}`, {
        // method: "DELETE"
      }).then(console.log("delete!"));
    };

    // const httpRequest = (id, method, headers, body) => {
    //   return new Promise((resolve, reject) => {
    //     fetch().then(res => resolve(res));
    //   });
    // };

    // Updates state's data with database
    const getAllFilms = () => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(films => {
            this.setState({
              data: films
            });
            return films;
          })
          .then(films => resolve(films));
      });
    };

    // Resets specified item to state's data value
    const resetItem = film => {
      const reset = window.confirm(
        "All unsaved changes for this item will be lost. Reset item?"
      );

      if (!reset) {
        return null;
      }

      // Resets values
      const fields = document
        .getElementById(`film-info-${film.film_id}`)
        .querySelectorAll("input, textarea, select");

      fields.forEach((field, index) => {
        if (index !== 0) {
          // Checks for diffs. Not sure if better or worse. Look into
          // if (film[field.name] != field.value) {
          field.value = film[field.name];
          // }
        }
      });

      // Removes highlights
      removeAllHighlights(film.film_id);
    };

    // TODO: Check for changes on outside edit outline
    const handleFieldChange = (film, event) => {
      const field = event.target;
      const fieldPill = field.parentElement;
      const title = document.getElementById(`film-info-${film.film_id}`)
        .parentElement;

      // If there is a diff, add highlight. If not remove it
      if (film[field.name] != field.value) {
        addClass(title, "border");
        addClass(fieldPill, "border");
      } else {
        removeClass(title, "border");
        removeClass(fieldPill, "border");
      }
    };

    const addClass = (element, className) => {
      element.classList.add(className);
    };

    const removeClass = (element, className) => {
      element.classList.remove(className);
    };

    const removeAllHighlights = id => {
      const title = document.getElementById(`film-info-${id}`).parentElement;
      const fields = document
        .getElementById(`film-info-${id}`)
        .querySelectorAll("input, textarea, select");

      // Removes highlight for fields
      fields.forEach(field => {
        removeClass(field.parentElement, "border");
      });

      // Remove highlight for title
      removeClass(title, "border");
    };

    const buildJSONFromForm = () => {};

    return (
      <div className="container">
        <Pagination
          numItems={data.length}
          currPage={pageId}
          itemsPerPage={12}
          numPages={this.state.numPages}
          url="/sakila"
        />

        {/* TODO: Make multiple selections possible */}
        <button
          className="btn btn-outline-primary btn-sm mr-1"
          onClick={() => {
            getAllFilms();
          }}
        >
          Refresh
        </button>

        <button
          className="btn btn-outline-success btn-sm mr-1"
          onClick={() => {
            postFilm({ title: "New Title" });
          }}
        >
          New Entry
        </button>

        {/* TODO: Save-all button? */}

        <div className="list-group mt-2 mb-2">
          {data.slice(itemRangeMin - 1, itemRangeMax).map(film => (
            <FilmItem
              film={film}
              key={film.film_id}
              putFilm={putFilm}
              deleteFilm={deleteFilm}
              handleFieldChange={handleFieldChange}
              resetItem={resetItem}
            />
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
  const { film, deleteFilm, putFilm, handleFieldChange, resetItem } = props;
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

                // console.log(id);
                // console.log(body);

                // putFilm(film, body).then(res => console.log(res));
                putFilm(film, body).then(res => res);
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
