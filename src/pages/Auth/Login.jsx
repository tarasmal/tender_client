import React, {useEffect, useState} from 'react';
import Input from "../../components/Auth/Input/Input";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";
import {useNavigate} from "react-router-dom";
import CustomButton from  '../../components/CustomButton'
import {LoginContext} from "../../contexts";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(['Email', 'Password'])
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.token){
            navigate('/profile/info')
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
                navigate("/profile/info")
            }
              catch (e) {
                  alert(e.response.data.message)
              }

        }
    }
    return (

        <LoginContext.Provider value={
            {
                errors: errors,
                setErrors: setErrors,
            }
        }>
            <div>
                <Input  name={'Email'} value={email} errors={errors} type={'text'} onChangeHandler={setEmail} context={LoginContext}/>
                <Input  name={'Password'} value={password} errors={errors} type={'password'}  onChangeHandler={setPassword} context={LoginContext}/>
                <CustomButton f={login} text={'Login'}/>
            </div>
        </LoginContext.Provider>
    );
};

export default Login;