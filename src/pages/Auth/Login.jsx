import React, {useEffect, useState} from 'react';
import Input from "../../components/Auth/Input/Input";
import LoginButton from "../../components/Auth/LoginButton/LoginButton";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(['Email', 'Password'])
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.token){
            navigate('/profile')
        }
    })
    const login = async () => {
        if (errors.length !== 0) alert("Заповніть усі поля!")
        else {
            try{
                let response = await axios.post(
                    users_request,

                    {
                        email: email,
                        password: password
                    },

                    {
                        headers: {'Content-Type': 'application/json'}
                    }
                )


                const token = response.data.token
                localStorage.setItem('token', token)
                window.history.pushState(null, null, window.location.href);
                navigate("/profile")
            }
              catch (e) {
                  alert(e.response.data.message)
              }

        }
    }
    return (
        <div className={'auth-container'}>
            <Input  name={'Email'} value={email} errors={errors} type={'text'}  setErrors={setErrors} onChangeHandler={setEmail}/>
            <Input  name={'Password'} value={password} errors={errors} type={'password'}  setErrors={setErrors} onChangeHandler={setPassword}/>
            <LoginButton login={login}/>
        </div>


    );
};

export default Login;