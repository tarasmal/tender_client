import React, { useEffect, useState} from 'react';
import { Outlet,  useNavigate} from "react-router";
import PrivateLink from "../../components/PrivateLink";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";
import {UserContext} from "../../contexts";
import '../../styles/Profile.css'


const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.token){
            navigate('/auth/login')
        }
        else {

        }

    })
    useEffect(() => {
        const fetchData = async () => {
            try{
                const token_info = jwtDecode(localStorage.token)
                const id = token_info.id
                const response = await axios.get(users_request + id, {
                    headers: {
                        'Authorization': "Bearer " + localStorage.token,
                        'Content-Type': "application/json"
                    }
                })
                const data = response.data
                const userData = Object.entries({
                    id: data.id,
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    role: data.role,
                    fullname: data.fullname,
                    location: data.location
                })
                setUserInfo(userData)
            }
            catch (error){
                localStorage.removeItem('token')
                navigate('../auth/login')
            }
        }
        fetchData()


    }, [])
    return (

        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>

                    <ul className={'nav flex-column'}>

                        <PrivateLink path={'info'} placeholder={'User info'} />
                        <PrivateLink path={'activity'} placeholder={'My activity'} />
                        <PrivateLink path={'changepass'} placeholder={'Change my password'} />

                    </ul>


                </div>

                <div className={'col'}>
                        <UserContext.Provider value={userInfo}>
                            <Outlet/>
                        </UserContext.Provider>
                </div>
                <div className={'col'}/>





            </div>
        </div>

    );
};

export default ProfilePage;