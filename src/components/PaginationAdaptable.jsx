import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFound from "../pages/status-codes/404";

class Pagination extends Component {
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
          <NotFound message={`The page '${this.props.url}' does not exist.`} />
        </React.Fragment>
      );

    const itemsAlwaysOnEnd = !this.props.itemsAlwaysOnEnd
      ? 1
      : this.props.itemsAlwaysOnEnd;

    const itemsInMiddle = !this.props.itemsInMiddle
      ? 2
      : this.props.itemsInMiddle;

    const keepWidth = !this.props.keepWidth ? true : false;

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

          {[...Array(this.props.numPages).keys()].reduce((allItems, num) => {
            const pageItem = (
              <PageItem
                key={num}
                pageNum={num}
                url={this.props.url}
                currPage={this.props.currPage}
              />
            );
            const truncatedItem = <TruncatedItem key={num} />;

            // if (this.props.numPages <= 7) {
            // if (!requiresPagination) {
            //   allItems.push(pageItem);
            // } else {
            // Always show the itemsAlwaysOnEnd page
            if (
              num + 1 <= itemsAlwaysOnEnd ||
              num + 1 > this.props.numPages - itemsAlwaysOnEnd
            ) {
              allItems.push(pageItem);

              // Page is ±1 from current page (variable?)
            } else if (
              num + itemsInMiddle >= this.props.currPage - 1 &&
              num - itemsInMiddle < this.props.currPage
            ) {
              allItems.push(pageItem);

              // Handle Truncated item. Currently, offset = 5

              // } else if (
              //   (this.props.currPage < truncOffset && num + 1 <= truncOffset) ||
              //   (this.props.currPage > this.props.numPages - truncOffset - 1 &&
              //     num + 1 > this.props.numPages - truncOffset)
              // ) {
            } else if (
              (this.props.currPage < itemsAlwaysOnEnd &&
                num + 1 <= itemsAlwaysOnEnd) ||
              (this.props.currPage >
                this.props.numPages - itemsAlwaysOnEnd + 1 &&
                num + 1 > this.props.numPages - itemsAlwaysOnEnd)
            ) {
              // } else if (
              //   this.props.currPage <= itemsAlwaysOnEnd &&
              // ) {
              allItems.push(pageItem);
            } else if (
              (num + 1 === itemsAlwaysOnEnd + 1 &&
                this.props.currPage > itemsAlwaysOnEnd) ||
              (num + 1 === this.props.numPages - itemsAlwaysOnEnd &&
                this.props.currPage < this.props.numPages - itemsAlwaysOnEnd)
            ) {
              allItems.push(truncatedItem);
            }
            // }
            return allItems;
          }, [])}

          <li
            className={`page-item${
              parseInt(this.props.currPage) >= this.props.numPages
                ? " disabled"
                : ""
            }`}
          >
            <Link
              className="page-link"
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
        props.pageNum + 1 === parseInt(props.currPage) ? " active" : ""
      }`}
    >
      <Link className="page-link" to={`${props.url}/${props.pageNum + 1}`}>
        {props.pageNum + 1}
      </Link>
    </li>
  );
};

const TruncatedItem = () => {
  return (
    <li className={`page-item disabled`}>
      <Link to="#" className="page-link disabled">
        ...
      </Link>
    </li>
  );
};

export default Pagination;
