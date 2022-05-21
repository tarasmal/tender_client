import React from 'react';
import {Link} from "react-router-dom";
import {PaginationContext} from "../../contexts";

const Pagination = () => {
    const pagination = useContext(PaginationContext)
    return (
        <div className={'mt-5 d-flex justify-content-center'}>
            <ul className="pagination">

            </ul>
        </div>
    );
};

export default Pagination;