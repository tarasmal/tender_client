import React, {useEffect, useState} from 'react';
import ActiveTender from "./ActiveTender";
import Bids from "./Bids";
import CustomButton from "../../components/CustomButton";
import {useNavigate} from "react-router";
import {WinnerContext} from "../../contexts";
import axios from "axios";
import {tenders_request} from "../../constants/rest_requests";

const ActiveTenderPage = () => {
    const navigate = useNavigate()
    const [winner, setWinner] = useState("")
    const toBid = () => {
        navigate('/createBid')
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(tenders_request, {
                headers: {
                    'get_user': 'true',
                    'tender_id': localStorage.tenderId,
                }
            })
            localStorage.hostId = response.data.userId
        }
        fetchData()
    }, [])

    return (
        <WinnerContext.Provider value={{
            winner: winner,
            setWinner: setWinner,
        }}>
        <div className={'row'}>
            <div className={'col'}>
                <ActiveTender/>
                {localStorage.role === 'provider' && <CustomButton f={toBid} text={'Create bid'}/>}
            </div>

            <div className={'col'}>
                    <Bids/>
            </div>
        </div>
    </WinnerContext.Provider>
    );
};

export default ActiveTenderPage;