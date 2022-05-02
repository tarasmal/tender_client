import React from 'react';

const RegistrationButton = ({registrate}) => {

    return (
        <div>
            <button className={'auth-button'} onClick={() => registrate()}> Register </button>
        </div>
    );
};

export default RegistrationButton;