import React from 'react';
import {Link} from "react-router-dom";
import {PaginationContext} from "../../contexts";

const PaginationPrevious = () => {
    const pagination = useContext(PaginationContext)
    return (
        <li className={'page-item'}>
            <Link to={}></Link>
        </li>
    );
};

export default PaginationPrevious;