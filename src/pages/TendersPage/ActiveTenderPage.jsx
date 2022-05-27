import React from 'react';
import ActiveTender from "./ActiveTender";
import Bids from "./Bids";

const ActiveTenderPage = () => {
    return (
        <div className={'row'}>
            <div className={'col'}>
                <ActiveTender/>
            </div>
            <div className={'col'}>
                <Bids/>
            </div>
        </div>
    );
};

export default ActiveTenderPage;