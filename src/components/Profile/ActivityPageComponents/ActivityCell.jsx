import React from 'react';

const ActivityCell = ({field}) => {
    return (
        <div className={'activity'}>
            {field.map(property => <div>{property[0]}: {property[1]}</div>)}
        </div>
    );
};

export default ActivityCell;