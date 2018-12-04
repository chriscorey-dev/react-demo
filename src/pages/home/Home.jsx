import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    document.title = "Chris Corey";
  }

  render() {
    return (
      <div className="container">
        <div className="card mb-2">
          <div className="card-header">
            <h2 className="mb-0 font-weight-normal">Chris Corey</h2>
            {/* <p className="mt-0 font-italic font-weight-light"> */}
            <p className="mt-0 font-weight-light">
              Business focused full-stack developer.
            </p>
          </div>
          <div className="card-body">
            {/* <p>Seattle born, Denver grown.</p>
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
            </ul> */}
            <p>
              Full-stack, business focused, Denver based, self-taught, always
              learning
            </p>
            I do:
            <ul>
              <li>Get things done</li>
              <li>Learn quickly</li>
              <li>Ask questions</li>
              <li>Think critically</li>
              <li>Take all factors into consideration</li>
            </ul>
            I like:
            <ul>
              <li>Learning new things</li>
              <li>Working in a team</li>
              <li>Helping people through problems</li>
              <li>Rethinking problems</li>
              <li>Finding the most effective solutions</li>
            </ul>
            I hate:
            <ul>
              <li>Solving a symptom and not the cause</li>
              <li>Leaving projects unfinished</li>
            </ul>
          </div>
        </div>
        <h5 className="font-weight-normal">What is this site? </h5>
        <small>
          Projects. Ideas. Broken code. Working code. Have a look around, maybe
          you'll find something you like.
        </small>

        <br />
        <br />

        <h5 className="font-weight-normal">Current Projects:</h5>
        <ul>
          <li>
            <div>
              <a href="https://react.chris-corey.com">This website</a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://github.com/chriscorey-dev/node-express-react-api"
                target="_blank"
              >
                Generated Public REST API Template
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
            <div>Fancy "designer" site</div>
          </li>

          <li>
            <div>More React</div>
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
                Montessori School of Denver Android App
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="https://notes.mybrokencode.com" target="_blank">
                Note Taking Site
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="http://home.chris-corey.com:3309" target="_blank">
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
