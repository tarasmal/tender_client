import React, {useState} from 'react';
import {BidContext} from "../../contexts";
import Input from "../../components/Auth/Input/Input";
import {bids_request} from "../../constants/rest_requests";
import axios from "axios";
import CustomButton from "../../components/CustomButton";

const CreateBidPage = () => {
    const [cost, setCost] = useState()
    const [errors, setErrors] = useState(['cost'])
    const createBid = async () => {
        const data = {
            cost: cost,
            tenderId: localStorage.tenderId
        }
        try{
            await axios.put(bids_request, data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.token
                }
            })
            alert('Bid has been successfully created!')

        }
        catch (e){
            console.log(e)
            alert('Error!')

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
                    <Input name={'cost'} value={cost} context={BidContext} onChangeHandler={setCost}/>
                    <CustomButton f={createBid} text={'Create bid'}/>
                </div>
            </div>

        </BidContext.Provider>

    );
};

export default CreateBidPage;