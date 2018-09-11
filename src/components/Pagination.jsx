import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    numPages: 0
  };

  componentDidMount() {
    const numPages = Math.ceil(this.props.numItems / this.props.itemsPerPage);
    this.setState({ numPages: numPages });
  }

  render() {
    // Gets number of pages before rendering
    if (!this.state.numPages) return null;
    return (
      <nav>
        {/* {console.log(this.state.numPages)} */}
        {/* <p>{JSON.stringify(this.props)}</p> */}
        {/* <p>{this.props.match.params.beerPageId}</p> */}
        {/* <p>{this.props.url}</p> */}
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <span>&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>

          {[...Array(this.state.numPages).keys()].map(num => (
            <PageItem
              key={num}
              pageNum={num}
              url={this.props.url}
              currPage={this.props.currPage}
              // onClick={this.handleChangePage}
            />
          ))}

          <li className="page-item">
            <a className="page-link" href="#">
              <span>&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const PageItem = props => {
  const activePage = props.pageNum + 1 == props.currPage ? " active" : null;
  return (
    <li className={`page-item${activePage}`}>
      <Link
        className="page-link"
        // to="#"
        to={`${props.url}/${props.pageNum + 1}`}
        // onClick={() => {
        //   handleChangePage(props.pageNum);
        // }}
      >
        {props.pageNum + 1}
      </Link>
    </li>
  );
};

const handleChangePage = props => {
  // console.log(props.currPage);
  // console.log(props.pageNum);
  props.currPage = props.pageNum;
};

export default Pagination;
