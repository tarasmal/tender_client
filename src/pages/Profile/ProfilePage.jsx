import React, { useEffect, useState} from 'react';
import '../../styles/Profile.css'
import {Outlet} from "react-router";
import PrivateLink from "../../components/PrivateLink";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {users_request} from "../../constants/rest_requests";
import {UserContext} from "../../UserContext";
const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        console.log('Profile page is loaded')
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
                console.log(error)
            }

        }
        fetchData()
    }, [])
    return (

        <div className={'profile container'}>
            <div className={'profile-links-body'}>
                <nav className={'profile-links'}>
                    <PrivateLink path={'info'} placeholder={'User info'} />
                    <PrivateLink path={'activity'} placeholder={'User activity'} />

                </nav>

            </div>
            <div className={'profile-body'}>
                <UserContext.Provider value={userInfo}>
                    <Outlet/>
                </UserContext.Provider>

            </div>
        </div>

    );
};

export default ProfilePage;