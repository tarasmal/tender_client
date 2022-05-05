import React from 'react';

const LoginButton = ({login}) => {
    return (
        <div>
            <button className={'auth-button'} onClick={login}> Login </button>
        </div>
    );
};

export default LoginButton;