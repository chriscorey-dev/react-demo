import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFound from "../pages/status-codes/404";

class Pagination extends Component {
  render() {
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
      ? 1
      : this.props.itemsInMiddle;

    const collapsable = !this.props.collapsable
      ? false
      : this.props.collapsable;

    // First end, first side of current item, truncated item, current item
    const truncOffset = itemsAlwaysOnEnd + itemsInMiddle + 1;

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

            const pageNum = num + 1;

            const { currPage, numPages } = this.props;

            // TODO: This isn't giving me exactly what I want.
            //       Reproduce: collapsable == true, 7 pages, 1 in middle, 1 on end
            //       The problem is the truncated item is being put in place when it's not necessary. Not an issue when !collapsable

            // If it will contain all items when not uncollapsed
            if (numPages <= truncOffset * 2 + 1) {
              allItems.push(pageItem);

              // Collapsable pagination
            } else if (collapsable) {
              // Start of pagination
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

                // End of pagination
              } else if (
                (this.props.currPage < itemsAlwaysOnEnd &&
                  num + 1 <= itemsAlwaysOnEnd) ||
                (this.props.currPage >
                  this.props.numPages - itemsAlwaysOnEnd + 1 &&
                  num + 1 > this.props.numPages - itemsAlwaysOnEnd)
              ) {
                allItems.push(pageItem);

                // Truncated items
              } else if (
                (num + 1 === itemsAlwaysOnEnd + 1 &&
                  this.props.currPage > itemsAlwaysOnEnd) ||
                (num + 1 === this.props.numPages - itemsAlwaysOnEnd &&
                  this.props.currPage < this.props.numPages - itemsAlwaysOnEnd)
              ) {
                allItems.push(truncatedItem);
              }
              // Uncollapsable pagination
            } else if (!collapsable) {
              // Start of pagination
              if (currPage <= truncOffset + 1) {
                if (pageNum <= truncOffset + itemsInMiddle + 1) {
                  allItems.push(pageItem);
                } else if (pageNum === numPages - itemsAlwaysOnEnd) {
                  allItems.push(truncatedItem);
                } else if (pageNum >= numPages - itemsAlwaysOnEnd) {
                  allItems.push(pageItem);
                }

                // End of pagination
              } else if (currPage >= numPages - truncOffset) {
                if (pageNum > numPages - truncOffset - itemsInMiddle - 1) {
                  allItems.push(pageItem);
                } else if (pageNum === itemsAlwaysOnEnd + 1) {
                  allItems.push(truncatedItem);
                } else if (pageNum <= itemsAlwaysOnEnd) {
                  allItems.push(pageItem);
                }

                // Between offsets, no overlap
              } else if (
                currPage > truncOffset &&
                currPage < numPages - truncOffset
              ) {
                if (pageNum <= itemsAlwaysOnEnd) {
                  allItems.push(pageItem);
                } else if (
                  pageNum === numPages - itemsAlwaysOnEnd ||
                  pageNum === itemsAlwaysOnEnd + 1
                ) {
                  allItems.push(truncatedItem);
                } else if (pageNum >= numPages - itemsAlwaysOnEnd) {
                  allItems.push(pageItem);
                } else if (
                  pageNum - 1 - itemsInMiddle < currPage &&
                  pageNum + 1 + itemsInMiddle > currPage
                ) {
                  allItems.push(pageItem);
                }
              }
            }
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
