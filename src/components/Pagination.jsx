import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NotFound from "../pages/status-codes/404";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    // numPages: 0
  };

  componentDidMount() {
    // const numPages = Math.ceil(this.props.numItems / this.props.itemsPerPage);
    // this.setState({ numPages: numPages });
  }

  render() {
    // Gets number of pages before rendering
    // if (!this.props.numPages) return null;

    // Checks for bad page number
    if (this.props.badPage)
      return (
        <React.Fragment>
          <NotFound
            message={`Beer page #${this.props.currPage} does not exist.`}
          />
        </React.Fragment>
      );

    return (
      <nav>
        <ul className="pagination">
          <li
            className={`page-item${
              parseInt(this.props.currPage) <= 1 ? " disabled" : ""
            }`}
          >
            <Link
              className="page-link"
              to={
                parseInt(this.props.currPage) <= 1
                  ? `#`
                  : `${this.props.url}/${parseInt(this.props.currPage) - 1}`
              }
            >
              <span>&laquo;</span>
              <span className="sr-only">Previous</span>
            </Link>
          </li>

          {[...Array(this.props.numPages).keys()].map(num => (
            <PageItem
              key={num}
              pageNum={num}
              url={this.props.url}
              currPage={this.props.currPage}
            />
          ))}

          <li
            className={`page-item${
              parseInt(this.props.currPage) >= this.props.numPages
                ? " disabled"
                : ""
            }`}
          >
            <Link
              className="page-link disabled"
              to={
                parseInt(this.props.currPage) >= this.props.numPages
                  ? `#`
                  : `${this.props.url}/${parseInt(this.props.currPage) + 1}`
              }
            >
              <span>&raquo;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const PageItem = props => {
  return (
    <li
      className={`page-item${
        props.pageNum + 1 == props.currPage ? " active" : ""
      }`}
    >
      {/* <li className="page-item"> */}
      {/* {console.log(`${props.url}/${props.pageNum + 1}`)} */}
      <Link className="page-link" to={`${props.url}/${props.pageNum + 1}`}>
        {props.pageNum + 1}
      </Link>
    </li>
  );
};

export default Pagination;
