import React from 'react';
import {Link} from "react-router-dom";

const PrivateLink = ({placeholder, path}) => {
    return (
        <li className={'nav-item'}>
            <Link className={'nav-link'} to={path}>{placeholder}</Link>
        </li>
    );
};

export default PrivateLink;