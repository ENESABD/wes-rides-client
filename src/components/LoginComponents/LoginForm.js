import React, { useEffect } from 'react';
import { noChange } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import Loading from '../CommonComponents/Loading';

function LoginForm({ setIsAuthenticated }) {
    const [values, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('POST','/authentication/login', noChange);

    useEffect(() => {
        
        if (response) {
            localStorage.setItem("jw_token", response.jw_token);
            setIsAuthenticated(true);
        }

    }, [response, setIsAuthenticated])


    return (        
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <p>Please enter your registered email and your WesRides password to login.</p>
        

            <InputItem
                inputObject={inputObjects.email}
                value={values.email}
                handleChange={handleChange}
            />


            <InputItem
                inputObject={inputObjects.password}
                value={values.password}
                handleChange={handleChange}
            />


            <ErrorMessage error={errorMessage}/>
            <Loading loading={requestInProcess}/>

            <button type="submit" className='btn btn-primary'>Login</button>
        </form>
    )
}

export default LoginForm;