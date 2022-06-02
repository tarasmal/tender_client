import React, {useEffect, useState} from 'react';
import CustomButton from "../../CustomButton";

const ActivityCell = ({field, index}) => {
    const [status, setStatus] = useState([])
    const [renderInfo, setRenderInfo] = useState([])
    useEffect(() => {
        const info = field.filter(it => it[0] !== 'status')
        const status_ = field.filter(it => it[0] === 'status')[0][1]
        console.log(status_)
        setRenderInfo(info)
        setStatus(status_)


    }, [])

    return (
        <ul style={{'padding':'10px'}}
            className={'list-group'}>
            #{index + 1}
            {renderInfo.map((property, index) => <li className={'list-group-item'} key={index}> {property[0]}: {property[1]}</li>)}
            <div className={'bth-group'}>
                <CustomButton text={'delete'} style={{'backgroundColor': 'red'}}/>
                {
                    localStorage.role === 'customer' && (status === true ?  <CustomButton text={'pause'} /> :  <CustomButton text={'unpause'} />)

                }
            </div>

        </ul>
    );
};

export default ActivityCell;