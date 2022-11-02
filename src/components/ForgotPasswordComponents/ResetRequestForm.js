import React from 'react';
import { Navigate } from 'react-router-dom';
import { noChange } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json'

function ResetRequestForm() {
    
    const [value, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('POST', '/authentication/forgot-password', noChange);

    return (
        <>{
            response?.success ? <Navigate to='/email-sent' />
            :
            <form onSubmit={handleSubmit}>
                <p>Please enter your registered email and click on the button below. 
                    You will then be emailed a password reset link.</p>
            
                <br/>

                <InputItem
                    inputObject={inputObjects.email}
                    value={value.email}
                    handleChange={handleChange}
                />

                <br/>

                {errorMessage && <p>{errorMessage}<br/></p>} 
                {requestInProcess && <p>Loading...<br/></p>} 

                <button type="submit">Reset password</button>
            </form>
        }</>
    )
}

export default ResetRequestForm;