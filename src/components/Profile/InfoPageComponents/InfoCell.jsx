import React from 'react';

const InfoCell = ({placeholder, value}) => {
    return (
        <li style={{'marginBottom':'10px'}}
            className={'list-group-item'}>
            {placeholder} : {value}
        </li>
    );
};

export default InfoCell;