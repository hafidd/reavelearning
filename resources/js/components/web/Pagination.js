import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const { pageData, handlePageClick, page } = props
    return (
        <div className="pagination" style={{ display: pageData.pageCount > 1 ? 'block' : 'none' }}>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageData.pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                initialPage={page - 1}

                containerClassName={'pagination pagination-sm'}
                pageClassName={'page-item'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                breakClassNamee={'page-item'}
                nextLinkClassName={'page-link'}
                previousClassName={'page-link'}
                pageLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default Pagination