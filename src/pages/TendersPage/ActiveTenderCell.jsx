import React from 'react';

const ActiveTenderCell = ({propertyName, propertyValue}) => {
    return (
        <div>
            {propertyName}
            <li className={'list-group-item'}>
                {propertyValue}
            </li>
        </div>

    );
};

export default ActiveTenderCell;