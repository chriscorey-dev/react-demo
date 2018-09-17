import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card mb-2">
          <div className="card-header">
            <h2 className="mb-0 font-weight-normal">Chris Corey</h2>
            <p className="mt-0 font-italic font-weight-light">
              Programmer, musician, explorer.
            </p>
          </div>
          <div className="card-body">
            <p>Seattle born, Denver grown.</p>
            <p>
              I write code. I play guitar. I go on adventures. I like meeting
              people. I feel like this would look better as a bulleted list...
            </p>
            <ul>
              <li>
                <small>That's better</small>
              </li>
              <li>
                <small>I discover new places around Denver.</small>
              </li>
              <li>
                <small>
                  I love learning. If learning was a hobby I'd go to meetups.
                </small>
              </li>
              <li>
                <small>I eat sushi.</small>
              </li>
              <li>
                <small>You get the idea.</small>
              </li>
            </ul>
            <small>
              What's this site? Projects. Ideas. Broken code. Good code. Have a
              look around, maybe you'll find something you like.
            </small>
          </div>
        </div>

        <h5 className="font-weight-normal">Current Projects:</h5>
        <ul>
          <li>
            <div>
              <a href="https://react.chris-corey.com">You're looking at it</a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/chriscorey-dev/node-express-react-api">
                Automatic Public REST API Template
              </a>
              <br />
              <a
                href="https://api.chris-corey.com/api/sakila/film/1"
                target="_blank"
              >
                API Endpoint Example
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://chris-corey.com">Revamp portfolio page</a>
            </div>
          </li>
        </ul>

        <h5 className="font-weight-normal">Planned Projects:</h5>
        <ul>
          <li>
            <div>Brewery site</div>
          </li>

          <li>
            <div>Fancy "designer" site</div>
          </li>

          <li>
            <div>Mo React!</div>
          </li>
        </ul>

        <h5 className="font-weight-normal">Previous Projects:</h5>
        <ul>
          <li>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.upperhouse.MontessoriSchoolOfDenver">
                Montessori School of Denver android app
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://notes.mybrokencode.com">Note Taking site</a>
            </div>
          </li>

          <li>
            <div>
              <a href="http://banana.chris-corey.com:3309">
                Dedicated Home Server
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://github.com/chriscorey-dev">More on GitHub</a>
            </div>
          </li>
        </ul>

        <div>
          <p>Connect with me</p>
          <a href="https://github.com/chriscorey-dev" className="m-1">
            GitHub
          </a>
          |
          <a href="https://codepen.io/chriscorey_dev" className="m-1">
            Codepen.io
          </a>
          |
          <a href="https://twitter.com/chriscorey_dev" className="m-1">
            Twitter
          </a>
          |
          <a href="https://medium.com/@chriscorey_dev" className="m-1">
            Medium
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
