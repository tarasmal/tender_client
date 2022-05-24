import React from 'react';
import {Link} from "react-router-dom";

const Bar = ({isActive, number, setCurrentPage, setActivePage}) => {

    return (
        <li className={isActive ? 'page-item active' : 'page-item'}>
            <Link to={''}
                  onClick={() => {
                      setCurrentPage(number)
                      setActivePage(number - 1)
                  }}
                  className={'page-link'}
            >
                {number}
            </Link>
        </li>

    );
};

export default Bar;