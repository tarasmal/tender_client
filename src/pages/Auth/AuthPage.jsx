import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import {Nav} from "react-bootstrap";
const AuthPage = () => {
    const location = useLocation();
    const current = location.pathname.split('/').at(-1)

    return (
        <div className={'container p-3 mb-3 bg-light text-white'}>
            <div className={'row'}>
                <div className={'col'}/>
                <div className={'col'}>
                    <nav className={'navbar navbar-light bg-light'}>
                        <Nav className="justify-content-center" activeKey="/home">
                            <div >
                                {current === 'registration' ?
                                    <p className="font-italic" style={{'color': 'grey'}}>Registration page</p>
                                    :
                                    <p className="font-italic" style={{'color': 'grey'}}>Login page</p>
                                }
                            </div>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link  to='registration'>
                                        Registration
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link  to='login'>
                                            Login
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav.Item>
                        </Nav>
                        <div>
                        </div>
                    </nav>
                    <div>
                        <Outlet/>
                    </div>
                </div>
                <div className={'col'}/>
                </div>

            </div>

    );
};

export default AuthPage;