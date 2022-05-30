import React from 'react';
import Previous from "./Previous";
import Next from "./Next";
import PagesBar from "./PagesBar";

const Pagination = ({pagesCount, currentPage, setCurrentPage}) => {
    return (
        <div className={'mt-5 d-flex justify-content-center'}>
            <ul className="pagination">
                <Previous currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <PagesBar/>
                <Next pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </ul>
        </div>
    );




};

export default Pagination;