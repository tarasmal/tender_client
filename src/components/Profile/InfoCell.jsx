import React from 'react';

const InfoCell = ({placeholder, value}) => {
    return (
        <div className={'info-value'}>
            {placeholder} : {value}

        </div>
    );
};

export default InfoCell;