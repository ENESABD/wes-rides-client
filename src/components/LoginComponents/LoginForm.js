import React, { useEffect } from 'react';
import { noChange } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json';

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
        
            <br/>

            <InputItem
                inputObject={inputObjects.email}
                value={values.email}
                handleChange={handleChange}
            />

            <br/>

            <InputItem
                inputObject={inputObjects.password}
                value={values.password}
                handleChange={handleChange}
            />

            <br/>

            {errorMessage ? <p>{errorMessage}<br/></p> : null}
            {requestInProcess ? <p>Loading...<br/></p> : null}

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;