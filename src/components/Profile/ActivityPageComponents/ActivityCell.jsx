import React from 'react';
import CustomButton from "../../CustomButton";

const ActivityCell = ({field, index}) => {

    return (
        <ul style={{'padding':'10px'}}
            className={'list-group'}>
            #{index + 1}
            {field.map((property, index) => <li className={'list-group-item'} key={index}> {property[0]}: {property[1]}</li>)}
            <div className={'bth-group'}>
                <CustomButton text={'delete'} style={{'backgroundColor': 'red'}}/>
                {
                    localStorage.role === 'customer' && <CustomButton text={'pause'}/>

                }
            </div>

        </ul>
    );
};

export default ActivityCell;