import React from 'react';

const Input = ({name, value, errors, type , setErrors, onChangeHandler}) => {
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
            <input
                className={'form-control'}
                style={{'marginBottom': '10px'}}
                type={type}
                   name={name}
                   placeholder={name}
                   value={value}
                   onChange={e => {
                       onChangeHandler(e.target.value)
                       const _errors = errors.filter(it => it !== name)
                       setErrors(_errors)
                   }}
                   onBlur={() => onBlurHandler(errors, setErrors)}

            />
    );
};

export default Input;