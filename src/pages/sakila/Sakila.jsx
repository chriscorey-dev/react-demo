import React, { Component } from "react";

// TODO: Setup authentication for posts for public api built on back end.

class Sakila extends Component {
  state = {
    url: "http://localhost:3001/api/sakila/film",
    // const url = "https://api.chris-corey.com/api/sakila/film";
    data: null
  };

  componentDidMount() {
    document.title = "Sakila";

    fetch(this.state.url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      });
  }

  render() {
    const { data, url } = this.state;

    if (!data) {
      return (
        <div className="container">
          <p>Loading Films...</p>
        </div>
      );
    }

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
      fetch(`${url}/${id}`, {
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json; charset=utf-8"
        // },
        // body: JSON.stringify(body)
      })
        .then(console.log("delete!"))
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
    return (
      <div className="container">
        <button
          className="btn btn-outline-primary btn-sm mr-1"
          onClick={() => {
            getFilm;
          }}
        >
          GET
        </button>
        <button
          className="btn btn-outline-success btn-sm mr-1"
          onClick={() => {
            postFilm;
          }}
        >
          POST
        </button>
        <ul className="list-group list-group-flush mt-2">
          {data.map(film => (
            <li key={film.film_id} className="list-group-item">
              {film.title}
              <button
                className="btn btn-outline-danger btn-sm float-right mr-1"
                onClick={() => {
                  const confirm = window.confirm(
                    `Are you sure you want to delete film: ${film.title}`
                  );
                  if (confirm) {
                    deleteFilm(film.film_id);
                  }
                }}
              >
                DELETE
              </button>
              <button
                className="btn btn-outline-primary btn-sm float-right mr-1"
                onClick={() => {
                  const title = prompt("Enter title", film.title);
                  putFilm(film.film_id, { title: title });
                }}
              >
                PUT
              </button>
            </li>
          ))}
        </ul>
        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
    );
  }
}

export default Sakila;
