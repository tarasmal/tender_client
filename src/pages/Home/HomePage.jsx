import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import '../../styles/Home.css'

const HomePage = () => {

    return (
        <div>
            <nav className={'navbar navbar-expand-lg navbar-light'} style={{'backgroundColor':'burlywood'}}>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/'}>Home</Link>
                </div>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/profile/info'}>Profile</Link>
                </div>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/tenders'}>Tenders</Link>
                </div>
                <div className={'col'}>
                    <Link className={'home-nav-links'} to={'/creating'}>Create tender</Link>
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
            <div className={'container mt-5'}>
                <Outlet />
            </div>

        </div>
    );
};

export default HomePage;