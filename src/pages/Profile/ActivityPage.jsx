import React from 'react';

import Activity from "../../components/Profile/ActivityPageComponents/Activity";

const ActivityPage = () => {
    const role = localStorage.role
    return (
        <>
            My {role === 'customer' ? 'tenders' : 'bids'}
            <Activity/>
        </>

    );
};

export default ActivityPage;