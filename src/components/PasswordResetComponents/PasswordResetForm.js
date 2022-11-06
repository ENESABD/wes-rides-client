import React from 'react';
import { Navigate } from 'react-router-dom';
import { passwordConfirmationCheck } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import ChangePassword from '../CommonComponents/ChangePassword';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import Loading from '../CommonComponents/Loading';

function PasswordResetForm({ jwt }) {
    const [values, handleChange, handleSubmit, response, errorMessage, isLoading] = 
        useFormWithRequest('PUT', '/user/password-reset', passwordConfirmationCheck, jwt);

    return (
        <>{
            response?.success ? <Navigate to='/login' />
            :
            <form onSubmit={handleSubmit}>
                <ChangePassword values={values} handleChange={handleChange} isReset={true}/>

                <ErrorMessage error={errorMessage}/>
                <Loading loading={isLoading}/>

                <button type="submit" className='btn btn-primary'>Set the new password</button>
            </form>
        }</>
    )
}

export default PasswordResetForm;