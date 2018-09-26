import React, { Component } from "react";

class Demo extends Component {
  componentDidMount() {
    document.title = "Bootstrap 4 demo";
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* <!-- Glyphicons --> */}
          {/* <!-- ded --> */}
          {/* <!-- <div className="jumbotron">
    <p>
      <span className="glyphicon glyphicon-film"></span>

      <a href="#" className="btn btn-primary btn-lg">Trash <span className="glyphicon glyphicon-trash"></span></a>

      <button className="btn-btn-default-btn-lg">
        <span className="glyphicon glyphicon-phone-alt" aria-hidden="true"></span> Call Me
      </button>
    </p>
    </div> --> */}

          <h2>Bootstrap 4.0 Demo</h2>
          {/* <!-- Cards --> */}
          <div className="card card-body mb-3 mt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* <!-- Simple colors --> */}
          <span className="text-muted">Lorem ipsum</span>
          <span className="text-primary">Lorem ipsum</span>
          <span className="text-success">Lorem ipsum</span>
          <span className="text-info">Lorem ipsum</span>
          <span className="text-warning">Lorem ipsum</span>
          <span className="text-danger">Lorem ipsum</span>
          <br />
          <br />

          {/* <!-- Simple Dropdowns --> */}
          <div className="dropright mb-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Dropdown button
            </button>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          {/* <!-- Split button dropwdowns --> */}
          <div className="btn-group mb-3">
            <button type="button" className="btn btn-danger">
              Action
            </button>
            <button
              type="button"
              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>

          {/* <!-- Fancy Forms --> */}
          <div className="input-group input-group-lg mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Your Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
            <div className="input-group-append">
              {/* </span><button className="btn btn-default">Enter</button> */}
            </div>
          </div>
          <br />

          {/* <!-- Dropdown input groups --> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User ID
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Facebook
                </a>
                <a className="dropdown-item" href="#">
                  Twitter
                </a>
                <a className="dropdown-item" href="#">
                  Instagram
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
          </div>

          {/* <!-- Checkbox input group --> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input type="checkbox" />
              </div>
            </div>
            <input type="text" className="form-control" />
          </div>

          {/* <!-- Horizonal Nav Menu --> */}
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Contact
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Phone
                </a>
                <a href="#" className="dropdown-item">
                  Email
                </a>
                <a href="#" className="dropdown-item">
                  Form
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  Schedule an Appointment
                </a>
              </div>
            </li>
          </ul>

          {/* <!-- Vertical nav menu --> */}
          <ul className="nav flex-column mb-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>

          {/* <!-- Tabs. Very good --> */}
          <ul className="nav nav-pills nav-fill nav-tabs" id="myTab">
            <li className="nav-item">
              <a
                href="#home"
                className="nav-link active"
                id="home2-tab"
                data-toggle="tab"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#profile"
                className="nav-link"
                id="profile2-tab"
                data-toggle="tab"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                id="contact2-tab"
                data-toggle="tab"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="tab-content mb-3" id="myTabContent">
            <div className="tab-pane fade show active" id="home">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="tab-pane fade" id="profile">
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="tab-pane fade" id="contact">
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        {/* <!-- Collapsible Navigation Bar --> */}
        <div className="container mb-3">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href=".">
              <img src="/images/bootstrap-solid.svg" height="50" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">
                  Home
                </a>
                <a className="nav-item nav-link" href="#">
                  Profile
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact
                </a>
                <a className="nav-item nav-link" href="#">
                  About
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="container">
          {/* <!-- Pagination --> */}
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- Media Objects --> */}
          <div className="row mb-3">
            <div className="col-12 col-lg-6">
              <div className="media mb-3">
                <img
                  className="mr-3"
                  src="/images/bootstrap-solid.svg"
                  height="100"
                />
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="media mb-3">
                <img
                  className="mr-3"
                  src="/images/bootstrap-solid.svg"
                  height="100"
                />
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Progress Bar --> */}
          <div className="progress mb-3">
            <div className="progress-bar" style={{ width: "60%" }}>
              <span>60% complete</span>
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-striped"
              style={{ width: "25%" }}
            />
          </div>

          {/* <!-- Lists --> */}
          {/* <!-- <ul className="list-group">
    <li className="list-group-item">Verizon Email</li>
    <li className="list-group-item">
      <span className="badge">123</span>Gmail
    </li>
    <li className="list-group-item list-group-item-warning">Junk</li>
  </ul>

  <a href="#" className="list-group-item">Add Account</a>
  <a href="#" className="list-group-item">
    <h4 className="list-group-item-heading">Delete Account</h4>
    <p className="list-group-item-text">This will delete you account</p>
  </a>
  <button className="list-group-item">Check for Mail</button> --> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Demo;
