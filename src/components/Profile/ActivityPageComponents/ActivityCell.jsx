import React from 'react';

const ActivityCell = ({field, index}) => {
    return (
        <ul style={{'padding':'10px'}}
            className={'list-group'}>
            #{index + 1}
            {field.map((property, index) => <li className={'list-group-item'} key={index}> {property[0]}: {property[1]}</li>)}
        </ul>
    );
};

export default ActivityCell;