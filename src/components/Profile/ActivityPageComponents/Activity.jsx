import React, {useContext, useEffect, useState} from 'react';
import {ActivityContext} from "../../../contexts";
import ActivityCell from "./ActivityCell";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {bids_request, tenders_request} from "../../../constants/rest_requests";

const Activity = () => {
    const [info, setInfo] = useState([])
    const role = localStorage.role
    const processingData = data => {
        const fields = role === 'customer' ? ['id', 'name', 'location', 'cost', 'status'] : ['id', 'cost', 'tenderId']
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

        <ul>
            {info.map((field, index)=> <ActivityCell  index={index}  key={index}  field={field} /> )}
        </ul>
    );
};

export default Activity;