import React from 'react';

const CustomButton = ({f, text}) => {
    return (
        <div>
            <button  style={{'margin':'1%'}} className={'btn btn-secondary'} onClick={f}> {text} </button>
        </div>
    );
};

export default CustomButton;