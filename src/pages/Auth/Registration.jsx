import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import RegistrationButton from "../../components/RegistrationButton/RegistrationButton";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";

const Registration = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [location, setLocation] = useState("")
    const [fullname, setFullname] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState(['Name', 'Surname', 'Email', 'Role', 'Location', 'Fullname', 'Password', 'ConfirmPassword'])
    const registrate = () => {
        if (errors.length !== 0) {
            alert("Заповніть усі поля!")
        }
        else if (password !== confirmPassword){
            alert("Паролі не співпадають!")
        }
        else{
            const data = JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                role: role,
                location: location,
                fullname: fullname,
                password: password,
                status: true
            })
            axios.put(users_request, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then( (res) => console.log(res))
                .catch((res) => {
                    const response = res.response.data.message
                    response === 'User already exists' ? alert( response + " - use another email") : alert(response)
                    setEmail('')
            }
            )
        }
    }
    return (
        <div className={'auth-container'} >
            <Input  name={'Name'} value={name} errors={errors} type={'text'} setErrors={setErrors} onChangeHandler={setName}/>
            <Input  name={'Surname'} value={surname} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setSurname}/>
            <Input  name={'Email'} value={email} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setEmail}/>
            <Input  name={'Role'} value={role} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setRole}/>
            <Input  name={'Location'} value={location} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setLocation}/>
            <Input  name={'Fullname'} value={fullname} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setFullname}/>
            <Input  name={'Password'} value={password} errors={errors} type={'password'}  setErrors={setErrors} onChangeHandler={setPassword}/>
            <Input  name={'ConfirmPassword'} value={confirmPassword} errors={errors} type={'password'} setErrors={setErrors} onChangeHandler={setConfirmPassword}/>
            <RegistrationButton registrate={registrate}/>

        </div>
    );
};

export default Registration;