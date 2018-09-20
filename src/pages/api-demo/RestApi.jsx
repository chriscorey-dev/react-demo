import React, { Component } from "react";

class RestApi extends Component {
  render() {
    return (
      <div className="container">
        <a
          target="_blank"
          href="https://github.com/chriscorey-dev/node-express-react-api"
        >
          GitHub page
        </a>{" "}
        |{" "}
        <a target="_blank" href="https://react.chris-corey.com/api">
          Link to API Endpoint
        </a>
        <div>
          <h5>What is this project?</h5>
          <p>
            It's a rather simple REST API generator that creates a public
            endpoint for any specified databses. It's easily navigable and
            straightforward to setup.
            <br />
            The project is placed at the root of the web directory and doesn't
            modify it at all. Like the site you're on right now!
          </p>
          <h5>Examples:</h5>
          <p>
            Try pasting these paths into the url path for this site.
            <br />
            <small>
              You may need to use an incognito window with the current build.
            </small>
          </p>
          <span>List available databases</span>
          <pre>
            <span className="bg-light">/api</span>
          </pre>
          <span>List tables in sakila database</span>
          <pre>
            <span className="bg-light">/api/sakila</span>
          </pre>
          <span>List all items in film table</span>
          <pre>
            <span className="bg-light">/api/sakila/film</span>
          </pre>
          <span>List details of item with matching ID</span>
          <pre>
            <span className="bg-light">/api/sakila/film/1</span>
          </pre>
        </div>
      </div>
    );
  }
}

export default RestApi;
