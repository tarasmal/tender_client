import React, {useContext} from 'react';
import {UserContext} from "../../contexts";
import {useState} from "react";
import ChangeInput from "../../components/Profile/ChangePasswordComponents/ChangeInput";
import {password_request} from "../../constants/rest_requests";
import axios from "axios";
import CustomButton from "../../components/CustomButton";

const ChangePasswordPage = () => {
    const userInfo = useContext(UserContext)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [errors, setErrors] = useState(['old', 'new'])
    const changePassword = async (oldp, newp) => {
        if (errors.length !== 0){
            alert("Заповніть усі поля !")
        }
        else{
            const id = userInfo.filter(it => it[0] === 'id')[0][1]
            const data = JSON.stringify({old_password: oldp, new_password: newp})
            try{
                const response = await axios.post(
                    password_request + id,
                    data
                    ,
                    {headers: {'Content-Type': 'application/json'}})

                if (response.status === 200){
                    alert("Пароль змінено!")
                }
            }
            catch (e){
                if (e.response.status === 406) {
                    alert("Неправильний старий пароль!")
                }
                else{
                    alert("Невідома помилка: " + e.response.status)
                }

            }


        }
    }
    return (
        <div>
            <ChangeInput
                type={'password'}
                value={oldPassword}
                name={'old'}
                placeholder={"Введіть старий пароль"}
                errors={errors}
                setErrors={setErrors}
                onChange={setOldPassword}/>

            <ChangeInput
                type={'password'}
                value={newPassword}
                name={'new'}
                placeholder={"Введіть новий пароль"}
                errors={errors}
                setErrors={setErrors}
                onChange={setNewPassword}/>

            <CustomButton f={() => changePassword(oldPassword, newPassword)} text={'Change password'}>/</CustomButton>
        </div>
    );
};

export default ChangePasswordPage;