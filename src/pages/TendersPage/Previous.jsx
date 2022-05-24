import React from 'react';
import {Link} from "react-router-dom";

const Previous = ({currentPage, setCurrentPage}) => {
    return (
        <li className={'page-item'} style={{'marginRight':'5px'}}>
            <Link
                className={'page-link'}
                to={``}
                onClick={() => {
                    if (currentPage > 1){
                        setCurrentPage(() => currentPage - 1)
                    }

                }}
            >
            Previous
            </Link>
        </li>

    );
};

export default Previous;