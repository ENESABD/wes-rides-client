import React from 'react';

function InputItem({ inputObject, prevValue, value, noLabel, handleChange }) {
    return (
    <>
        {!noLabel &&
        <label htmlFor={inputObject.name} className='form-label'>
            {inputObject.label}{inputObject.required && <span aria-label="required">*</span>}
        </label>
        }

        <input 
            id={inputObject.name} 
            name={inputObject.name} 
            type={inputObject.type}

            required={inputObject.required}
            pattern={inputObject.pattern}
            maxLength={inputObject.maxLength}
            minLength={inputObject.minLength}

            value={(value !== undefined) ? value : prevValue || ""} 
            onChange={handleChange}
            
            className='form-control mb-2'
        />
    </>
  )
}

export default InputItem;