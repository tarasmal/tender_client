import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import '../../styles/Home.css'
import Pagination from "./Pagination";

const HomePage = () => {

    return (
        <div>
            <nav className={'navbar navbar-expand-lg navbar-light '} style={{'backgroundColor':'burlywood'}}>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/'}>Home</Link>
                </div>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/profile/info'}>Profile</Link>
                </div>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>
                <div className={'col'}/>

                <div className={'col'}>
                    <Link className={'home-nav-links log-out '}  to={'/auth/login'} onClick={() => localStorage.removeItem('token')}>Log out</Link>
                </div>



            </nav>
            <Outlet/>
        </div>
    );
};

export default HomePage;