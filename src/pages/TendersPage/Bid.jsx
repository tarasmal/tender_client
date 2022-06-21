import React, {useContext, useEffect, useState} from 'react';
import {items_request, users_request} from "../../constants/rest_requests";
import axios from "axios";
import CustomButton from "../../components/CustomButton";
import {WinnerContext} from "../../contexts";

const Bid = ({cost, userId}) => {
    const [userName, setUserName] = useState('')
    const {setWinner} = useContext(WinnerContext)
    useEffect(() => {
        const fetchData = async() => {
            const resp = await axios.get(users_request + userId, {
                headers: {
                    'Authorization': "Bearer " + localStorage.token,
                    'Content-Type': "application/json",
                }
            })
            const data = resp.data
            setUserName(data.name + " " + data.surname)
        }
        fetchData()

    }, [])


    return (
        <>
            <div className={'card md-2 mt-5'}>
                <div className={'card-body '}>
                    <h6 className={'card-title d-flex justify-content-center'}>{userName}</h6>
                </div>
                <div className={'list-group list-group-flush'}>
                    <div className={'list-group-item'}>
                        {cost}
                    </div>

                </div>

            </div>
            {localStorage.userId === localStorage.hostId ?
                <CustomButton style={{'backgroundColor': 'green'}} text={'Choose winner'} f={async () => {
                    setWinner(userId)
                    const data = JSON.stringify({
                        userId: userId
                    })

                    await axios.post(items_request + localStorage.tenderId, data, {
                        headers: {
                            'Content-Type': "application/json",
                        }
                    })
                }}/>
                :
                null
            }

        </>


    );
};

export default Bid;