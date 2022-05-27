import React, {useState} from 'react';
import Input from "../../components/Auth/Input/Input";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";
import {useNavigate} from "react-router-dom";
import CustomButton from  '../../components/CustomButton'
import {RegistrationContext} from "../../contexts";

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
    const navigate = useNavigate()

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
            setName('')
            setSurname('')
            setEmail('')
            setRole('')
            setLocation('')
            setFullname('')
            setPassword('')
            setConfirmPassword('')
            alert("Реєстрація успішна!")
            navigate("../login")
        }
    }
    return (
        <RegistrationContext.Provider value={
            {
                errors: errors,
                setErrors: setErrors
            }
        }>

            <div className={'auth-container'} >
                <Input  name={'Name'} value={name} type={'text'} onChangeHandler={setName} context={RegistrationContext}/>
                <Input  name={'Surname'} value={surname}  type={'text'}  onChangeHandler={setSurname} context={RegistrationContext}/>
                <Input  name={'Email'} value={email} type={'text'}  onChangeHandler={setEmail} context={RegistrationContext}/>
                <Input  name={'Role'} value={role}  type={'text'} onChangeHandler={setRole} context={RegistrationContext}/>
                <Input  name={'Location'} value={location} type={'text'}  onChangeHandler={setLocation} context={RegistrationContext}/>
                <Input  name={'Fullname'} value={fullname} type={'text'}   onChangeHandler={setFullname} context={RegistrationContext}/>
                <Input  name={'Password'} value={password} type={'password'} onChangeHandler={setPassword} context={RegistrationContext}/>
                <Input  name={'ConfirmPassword'} value={confirmPassword} type={'password'} onChangeHandler={setConfirmPassword} context={RegistrationContext}/>
                <CustomButton f={registrate} text={'Registrate'}/>

            </div>

        </RegistrationContext.Provider>
    );
};

export default Registration;