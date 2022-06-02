import React, {useContext} from 'react';
import {ActivityContext} from "../../../contexts";
import ActivityCell from "./ActivityCell";

const Activity = () => {
    const info = useContext(ActivityContext)
    return (

        <ul>
            {info.map((field, index)=> <ActivityCell  index={index}  key={index}  field={field} /> )}
        </ul>
    );
};

export default Activity;