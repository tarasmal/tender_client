import React from 'react';
import PrivateLink from "../../components/PrivateLink";

const LogOutButton = ({placeholder, path}) => {
    const logOutHandler = () => {
        localStorage.removeItem('token')
    }
    return (
        <div>
            <button onClick={() => logOutHandler()}>
                <PrivateLink path={path} placeholder={placeholder} />
            </button>

        </div>
    );
};

export default LogOutButton;