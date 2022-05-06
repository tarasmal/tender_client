import React, {useContext} from 'react';
import InfoCell from "./InfoCell";
import {UserContext} from "../../../contexts";

const Info = () => {
    const userInfo = useContext(UserContext)
    return (
        <div className={'user-info'}>
            {userInfo.map( user => <InfoCell key={user[0]} placeholder={user[0]} value={user[1]}/> )}
        </div>
    );
};

export default Info;