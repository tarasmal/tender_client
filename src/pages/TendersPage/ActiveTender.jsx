import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {items_request, tenders_request} from "../../constants/rest_requests";
import axios from "axios";
import ActiveTenderCell from "./ActiveTenderCell";
import {WinnerContext} from "../../contexts";
const ActiveTender = () => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [cost, setCost] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(true)
    const {winner, setWinner} = useContext(WinnerContext)
    useEffect(() => {
        localStorage.tenderId = id
    }, [id])
    useEffect(() => {
        const fetchData = async () => {
            const tenderResponse = await axios.get(tenders_request + id, {
                headers: {
                    'Content-Type': "application/json",
                    'is_one': 'true'
                }
            })
            let itemResponse = await axios.get(items_request + id, {headers: {'Content-Type': "application/json"}})
            const {name, location, cost} = tenderResponse.data
            const {startDate, endDate,  number, winnerId} = itemResponse.data

            setName(name)
            setLocation(location)
            setCost(cost)
            setStartDate(startDate)
            setEndDate(endDate)
            setWinner(winnerId)
            setNumber(number)
            setLoading(false)

        }
        fetchData()
    }, [winner])
    if (loading){
        return <h1 className={'d-flex justify-content-center'}>LOADING...</h1>
    }
    else{
        return (
            <div className={'w-50'} style={{'border': 'solid','border-color':'burlywood'}}>
                <div className={'card  m-2'}>
                    <div className={'card-body'}>
                        <h5 className={'card-title d-flex justify-content-center'}>{name}</h5>
                    </div>
                    <ul className={'list-group list-group-flush'}>

                        <ActiveTenderCell propertyName={'Location'} propertyValue={location}/>
                        <ActiveTenderCell propertyName={'Cost'} propertyValue={cost}/>
                        <ActiveTenderCell propertyName={'startDate'} propertyValue={startDate}/>
                        <ActiveTenderCell propertyName={'endDate'} propertyValue={endDate}/>
                        <ActiveTenderCell propertyName={'Winner ID'} propertyValue={winner}/>
                        <ActiveTenderCell propertyName={'Number'} propertyValue={number}/>
                    </ul>
                </div>
            </div>


        );
    }

};

export default ActiveTender;