import React, {useState} from 'react';
import Input from "../../components/Auth/Input/Input";
import {CreateTenderContext} from "../../contexts";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import {items_request, tenders_request} from "../../constants/rest_requests";

const CreateTenderPage = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [cost, setCost] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [number, setNumber] = useState('')
    const [errors, setErrors] = useState(['name', 'location', 'cost', 'startDate', 'endDate', 'number'])
    const check = () => {
        if (errors.length !== 0){
            alert("Заповніть усі поля!")
        }
    }
    const createTender = async () => {
        check()
        try{
            const response = await axios.put(tenders_request, {
                name: name,
                location: location,
                cost: cost
            }, {
                headers: {'Authorization': 'Bearer ' + localStorage.token}
            })
            const tenderId = response.data.id
            await axios.put(items_request + tenderId, {
                startDate: startDate,
                endDate: endDate,
                number: number,
            })
            alert("Тендер успішно створено!")

        }
        catch (e){
            alert("Помилка!")
        }


    }

    return (
        <CreateTenderContext.Provider value={{
            errors: errors,
            setErrors: setErrors,
        }}>

        <div>
            <Input name={'name'} value={name} onChangeHandler={setName} context={CreateTenderContext}>/</Input>
            <Input name={'location'} value={location} onChangeHandler={setLocation} context={CreateTenderContext}>/</Input>
            <Input name={'cost'} value={cost} onChangeHandler={setCost} context={CreateTenderContext}>/</Input>
            <Input name={'startDate'} value={startDate} onChangeHandler={setStartDate} context={CreateTenderContext}>/</Input>
            <Input name={'endDate'} value={endDate} onChangeHandler={setEndDate} context={CreateTenderContext}>/</Input>
            <Input name={'number'} value={number} onChangeHandler={setNumber} context={CreateTenderContext}>/</Input>
            <CustomButton f={createTender} text={'Create tender'}/>
        </div>


        </CreateTenderContext.Provider>
    );
};

export default CreateTenderPage;