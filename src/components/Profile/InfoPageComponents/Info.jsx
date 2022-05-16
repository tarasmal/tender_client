import React, {useContext} from 'react';
import InfoCell from "./InfoCell";
import {UserContext} from "../../../contexts";

const Info = () => {
    const userInfo = useContext(UserContext)
    return (
        <ul className={'list-group-item'}>
            {userInfo.map( user => <InfoCell key={user[0]} placeholder={user[0]} value={user[1]}/> )}
        </ul>
    );
};

export default Info;