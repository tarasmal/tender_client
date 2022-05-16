import React from 'react';

const ActivityCell = ({field}) => {
    return (
        <ul style={{'padding':'10px'}}
            className={'list-group'}>
            {field.map((property, index) => <li className={'list-group-item'} key={index}> {property[0]}: {property[1]}</li>)}
        </ul>
    );
};

export default ActivityCell;