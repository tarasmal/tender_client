import React from 'react';
import ActiveTender from "./ActiveTender";
import Bids from "./Bids";
import CustomButton from "../../components/CustomButton";
import {useNavigate} from "react-router";

const ActiveTenderPage = () => {
    const navigate = useNavigate()
    const toBid = () => {
        navigate('/createBid')
    }
    return (
        <div className={'row'}>
            <div className={'col'}>
                <ActiveTender/>
                {localStorage.role === 'provider' && <CustomButton f={toBid} text={'Create bid'}/>}
            </div>

            <div className={'col'}>
                <Bids/>
            </div>
        </div>
    );
};

export default ActiveTenderPage;