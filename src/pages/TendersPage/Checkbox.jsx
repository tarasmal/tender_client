import React from 'react';

const Checkbox  = ({checkBoxStatus, setCheckBoxStatus}) => {
    return (
        <div className={'form-check'}>
            Переглядати лише активні тендери
            <input className={'form-check-input'} type={'checkbox'} onClick={() => setCheckBoxStatus(!checkBoxStatus)}/>
        </div>
    );
};

export default Checkbox;