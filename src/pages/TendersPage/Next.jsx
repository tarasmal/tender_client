import React from 'react';
import {Link} from "react-router-dom";

const Next = ({pagesCount, currentPage, setCurrentPage}) => {
    return (
        <li className={'page-item'} style={{'marginLeft':'5px'}}>
            <Link
                className={'page-link'}
                to={''}
                onClick={() => {
                    if (currentPage < pagesCount){
                        setCurrentPage(() => currentPage + 1)
                    }

                }}
            >
                Next
            </Link>
        </li>
    );
};

export default Next;