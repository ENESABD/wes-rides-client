import React from 'react';
import InputItem from './InputItem';
import inputObjects from '../../inputs.json';

function ChangePassword({ values, handleChange, isReset }) {
    return (
        <>
            {!isReset &&
            <InputItem 
                inputObject={inputObjects.old_password}
                value={values.old_password}
                handleChange={handleChange}
            />}

            <br/>

            <p>Enter a new password. It must contain between 6 and 32 characters.</p>
            
            <br/>

            <InputItem 
                inputObject={inputObjects.new_password}
                value={values.new_password}
                handleChange={handleChange}
            />

            <br/>

            <InputItem 
                inputObject={inputObjects.new_password2}
                value={values.new_password2}
                handleChange={handleChange}
            />

            <br/>
        </>
    )
}

export default ChangePassword;