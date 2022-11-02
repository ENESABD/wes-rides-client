import React from 'react';
import { Navigate } from 'react-router-dom';
import { passwordConfirmationCheck } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import ChangePassword from '../CommonComponents/ChangePassword';

function PasswordResetForm({ jwt }) {
    const [values, handleChange, handleSubmit, response, errorMessage, isLoading] = 
        useFormWithRequest('PUT', '/user/password-reset', passwordConfirmationCheck, jwt);

    return (
        <>{
            response?.success ? <Navigate to='/login' />
            :
            <form onSubmit={handleSubmit}>
                <ChangePassword values={values} handleChange={handleChange} isReset={true}/>

                {errorMessage ? <p>{errorMessage}<br/></p> : null}
                {isLoading ? <p>Loading...<br/></p> : null}

                <button type="submit">Set the new password</button>
            </form>
        }</>
    )
}

export default PasswordResetForm;