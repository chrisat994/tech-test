import React from 'react';
// import classnames from 'classnames';
import { usePagination, DOTS } from './UsePagination';
// import './pagination.scss';
type Props = {
    onPageChange: Function,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number,

}
const Pagination: React.FC<Props> = ({ onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
}) => {


    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange![paginationRange!.length - 1];
    return (

        <ul
            className={'pagination-container'}
        >

            <li
                className={`pagination-item ${currentPage ===1?"disabled":""}`}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange!.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots" key={i}>&#8230;</li>;
                }

                return (

                    <li
                        className={`pagination-item ${currentPage === pageNumber?"selected":""}`}
                        onClick={() => onPageChange(pageNumber)}
                        key={i}
                    >
                        {pageNumber}
                    </li>
                );
            })}

            <li
                className={`pagination-item ${currentPage === lastPage?"disabled":""}`}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;