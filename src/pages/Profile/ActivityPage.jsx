import React, {useContext, useEffect, useState} from 'react';
import {ActivityContext, UserContext} from "../../contexts";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {bids_request, tenders_request} from "../../constants/rest_requests";
import Activity from "../../components/Profile/ActivityPageComponents/Activity";


const ActivityPage = () => {
    const [info, setInfo] = useState([])
    const userContext = useContext(UserContext)
    const role = userContext.filter(item => item[0] === 'role')[0][1]
    const processingData = data => {
         const fields = role === 'customer' ? ['name', 'location', 'cost'] : ['cost']
         return data.map(field => field.filter(cell => fields.includes(cell[0])))

    }
    useEffect(() => {
        const fetchData = async () => {
            try{
                const token_info = jwtDecode(localStorage.token)
                const id = token_info.id
                const response = await axios.get(role === 'customer' ? tenders_request + id : bids_request, {
                    headers: {
                        'Authorization': "Bearer " + localStorage.token,
                        'Content-Type': "application/json"
                    }
                })
                const res = response.data
                let data = res.map(item => Object.entries(item))
                setInfo(processingData(data))
            }
            catch (error){
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <ActivityContext.Provider value={info}>
            My {role === 'customer' ? 'tenders' : 'bids'}
            <div>
                <Activity/>
            </div>
        </ActivityContext.Provider>

    );
};

export default ActivityPage;