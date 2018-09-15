import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card mb-2">
          <div className="card-header">
            <h2 class="mb-0 font-weight-normal">Chris Corey</h2>
            <p className="mt-0 font-italic font-weight-light">
              Programmer, musician, etc.
            </p>
          </div>
          <div className="card-body">
            <h3 className="font-weight-normal">Bio</h3>
            <p>Seattle born, Denver grown.</p>
            <p>Code, guitar, explore.</p>
          </div>
        </div>

        <h5 className="font-weight-normal">Current Projects:</h5>
        <ul>
          <li>
            <div>
              <a href="https://react.chris-corey.com" target="_blank">
                You're looking at it
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://github.com/chriscorey-dev/node-express-react-api"
                target="_blank"
              >
                RESTful API Template build on top of react.
              </a>
              <br />
              <a
                href="https://api.chris-corey.com/api/sakila/film"
                target="_blank"
              >
                Example Site
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://chris-corey.com" target="_blank">
                Revamp portfolio page
              </a>
            </div>
          </li>
        </ul>

        <h5 className="font-weight-normal">Planned Projects:</h5>
        <ul>
          <li>
            <div>Brewery site</div>
          </li>

          <li>
            <div>Cliche "designer" site</div>
          </li>
        </ul>

        <h5 className="font-weight-normal">Previous Projects:</h5>
        <ul>
          <li>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.upperhouse.MontessoriSchoolOfDenver"
                target="_blank"
              >
                Montessori School of Denver android app
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://notes.mybrokencode.com" target="_blank">
                Note Taking site
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="http://banana.chris-corey.com:3309" target="_blank">
                Dedicated Home Server
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://github.com/chriscorey-dev" target="_blank">
                More on GitHub
              </a>
            </div>
          </li>
        </ul>

        <div>
          <p>Connect with me</p>
          <a
            href="https://github.com/chriscorey-dev"
            target="_blank"
            className="m-1"
          >
            GitHub
          </a>
          |
          <a
            href="https://codepen.io/chriscorey_dev"
            target="_blank"
            className="m-1"
          >
            Codepen.io
          </a>
          |
          <a
            href="https://twitter.com/chriscorey_dev"
            target="_blank"
            className="m-1"
          >
            Twitter
          </a>
          |
          <a
            href="https://medium.com/@chriscorey_dev"
            target="_blank"
            className="m-1"
          >
            Medium
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
