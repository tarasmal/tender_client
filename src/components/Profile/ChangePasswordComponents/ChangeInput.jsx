import React from 'react';

const ChangeInput = ({value, placeholder, onChange, errors, setErrors, type, name}) => {
    const onBlurHandler = (errors, setErrors) => {
        if (!value) {
            if (!errors.includes(name)){
                const _errors = errors.slice()
                _errors.push(name)
                setErrors(_errors)
            }
        }
    }

    return (
        <div>
            <input className={'change-password-input'}
                   type={type} name={name}
                   value={value}
                   placeholder={placeholder}
                   onChange={e => {
                       onChange(e.target.value)
                       const _errors = errors.filter(it => it !== name)
                       setErrors(_errors)
                   }}
                   onBlur={() => onBlurHandler(errors, setErrors)}/>
        </div>
    );
};

export default ChangeInput;