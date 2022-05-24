import React from 'react';
import {Link} from "react-router-dom";

const Bar = ({number, setCurrentPage, currentPage}) => {

    return (
        <li className={currentPage === number ? 'page-item active' : 'page-item'}>
            <Link to={''}
                  onClick={() => {
                      setCurrentPage(number)

                  }}
                  className={'page-link'}
            >
                {number}
            </Link>
        </li>

    );
};

export default Bar;