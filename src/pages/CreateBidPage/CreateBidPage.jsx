import React, {useState} from 'react';
import {BidContext} from "../../contexts";
import Input from "../../components/Auth/Input/Input";
import {bids_request} from "../../constants/rest_requests";
import axios from "axios";
import CustomButton from "../../components/CustomButton";
import {useNavigate} from "react-router";

const CreateBidPage = () => {
    const [cost, setCost] = useState('')
    const [errors, setErrors] = useState(['cost'])
    const navigate = useNavigate()
    const createBid = async () => {
        if (!cost){
            return alert('Fill the input!')
        }
        const data = {
            cost: cost,
            tenderId: localStorage.tenderId,
            userId: localStorage.userId,
        }
        try{
            await axios.put(bids_request, data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.token
                }
            })
            alert('Bid has been successfully created!')
            navigate(-1)

        }
        catch (e){
            let message
            const response = e.response.status
            if (response === 403){
                message = 'This tender is paused!'
            }
            else if (response === 406){
                message = 'You have already applied a bid!'
            }
            alert(message)


        }

    }
    return (
        <BidContext.Provider value={
            {
                errors: errors,
                setErrors: setErrors,
            }
        }>
            <h1 className={'d-flex justify-content-center'}>Create bid</h1>
            <div className={'d-flex justify-content-center'}>

                <div className={'mt-5 ml-5 w-50'}>
                    Suggest your cost for bid:
                    <Input name={'cost'} value={cost} context={BidContext} type={'text'} onChangeHandler={setCost}/>
                    <CustomButton f={createBid} text={'Create bid'}/>
                </div>
            </div>

        </BidContext.Provider>

    );
};

export default CreateBidPage;