import React, {useEffect, useState} from 'react';

const CustomButton = ({f, text, style}) => {
    const [styling, setStyling] = useState({})
    useEffect(() => {
        setStyling(Object.assign({'margin':'1%'}, style))
    }, [])
    return (
        <div>
            <button  style={styling} className={'btn btn-secondary'} onClick={f}> {text}</button>
        </div>
    );
};

export default CustomButton;