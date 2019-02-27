import * as React from "react";
import ReactPaginate from "react-paginate";

import "./styles.scss";

export interface Props {
  pageCount: number;
  onPageChange(event: any): void;
}

class Pagination extends React.PureComponent<Props, {}> {
  render() {
    const { pageCount, onPageChange } = this.props;

    return pageCount >= 1 ? (
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName="paginationWrapper"
        pageClassName="paginationLink"
        previousLabel="previous"
        nextLabel="next"
        previousClassName="arrowLeft"
        nextClassName="arrowRight"
        onPageChange={onPageChange}
      />
    ) : null;
  }
}

export default Pagination;
