import React from 'react';

const Checkbox  = ({checkBoxStatus, setCheckBoxStatus}) => {
    return (
        <div className={'form-check'}>
            Search only active tenders
            <input className={'form-check-input'} type={'checkbox'} onClick={() => setCheckBoxStatus(!checkBoxStatus)}/>
        </div>
    );
};

export default Checkbox;