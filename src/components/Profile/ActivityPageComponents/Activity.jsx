import React, {useContext} from 'react';
import {ActivityContext} from "../../../contexts";
import ActivityCell from "./ActivityCell";

const Activity = () => {
    const activities = useContext(ActivityContext)
    return (
        <div >
            {activities.map((field, index)=> <ActivityCell key={index} field={field} /> )}
        </div>
    );
};

export default Activity;