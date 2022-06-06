import React, {useContext, useEffect, useState} from 'react';
import {ActivityContext, UserContext} from "../../contexts";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {bids_request, tenders_request} from "../../constants/rest_requests";
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