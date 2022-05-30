import React, {useContext} from 'react';
import {ActivityContext} from "../../../contexts";
import ActivityCell from "./ActivityCell";

const Activity = () => {
    const activities = useContext(ActivityContext)
    return (

        <ul>
            {activities.map((field, index)=> <ActivityCell index={index} key={index} field={field} /> )}
        </ul>
    );
};

export default Activity;