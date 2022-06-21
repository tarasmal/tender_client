import React, {useEffect, useState} from 'react';
import axios from "axios";
import {bids_request} from "../../constants/rest_requests";
import Bid from "./Bid";

const Bids = () => {
    const [bids, setBids] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(bids_request, {
                headers: {'Content-Type': "application/json"}
            })
            setBids(resp.data)
            console.log(resp.data)
        }
        fetchData()
    }, [])
    if (bids.length === 0){
        return (
            <div>
                <h3>
                    there will be bids
                </h3>
            </div>
        );
    }
    else{
        return (
            <>
                <h1>Bids</h1>
                {bids.map((data, index) => <Bid key={index} cost={data.cost} userId={data.userId}/>)  }
            </>
        );
    }
};

export default Bids;