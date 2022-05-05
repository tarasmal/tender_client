import React from 'react';
import {Link} from "react-router-dom";

const PrivateLink = ({placeholder, path}) => {
    return (
        <div className={'private-link'}>
            <Link to={path}>{placeholder}</Link>
        </div>
    );
};

export default PrivateLink;