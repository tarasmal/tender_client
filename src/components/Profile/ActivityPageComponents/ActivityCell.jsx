import React, {useEffect, useState} from 'react';
import CustomButton from "../../CustomButton";
import axios from "axios";
import {bids_request, tenders_request} from "../../../constants/rest_requests";

const ActivityCell = ({field, index}) => {
    const [status, setStatus] = useState([])
    const [renderInfo, setRenderInfo] = useState([])
    const [id, setId] = useState(0)
    const [tenderId, setTenderid] = useState(0)
    useEffect(() => {
        const info = field.filter(it => !['status', 'id'].includes(it[0]))
        setRenderInfo(info)

    }, [])
    useEffect(() => {
        if (localStorage.role === 'customer'){
            const status_ = field.filter(it => it[0] === 'status')[0][1]
            setStatus(status_)
        }else{
            const tId = field.filter(it => it[0] === 'tenderId')[0][1]
            setTenderid(tId)
        }

    }, [])
    useEffect(() => {
        const id_ = field.filter(it => it[0] === 'id')[0][1]
        setId(id_)
    }, [])

    const pause = async () => {
        setStatus(!status)
        try{
            await axios.post(tenders_request, {
                id: id,
                status: status,
            },
                {
                    headers: {'Content-Type': "application/json"}
                })
        }
        catch (e){
            console.log(e)
        }
    }
    const del = async (role) => {
        let host
        let reqId
        if (role === 'customer'){
            host = tenders_request
            reqId = id
        }
        else{
            host = bids_request
            reqId = tenderId
        }
        try{
            await axios.delete(host + reqId, {
                headers: {'Content-Type': "application/json"}
            })

            alert("Deleted")
        }
        catch (e){
            console.log(e)
            alert("Not deleted")
        }



    }
    return (
        <ul style={{'padding':'10px'}}
            className={'list-group'}>
            #{index + 1}
            {renderInfo.map((property, index) => <li className={'list-group-item'} key={index}> {property[0]}: {property[1]}</li>)}
            <div className={'bth-group'}>
                <CustomButton text={'delete'} f={() => del(localStorage.role)} style={{'backgroundColor': 'red'}}/>
                {
                    localStorage.role === 'customer' && (status === true ?
                        <CustomButton f={pause} text={'pause'} />
                        :
                        <CustomButton f={pause} text={'unpause'} />)

                }
            </div>

        </ul>
    );
};

export default ActivityCell;