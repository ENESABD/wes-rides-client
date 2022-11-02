import React from 'react';
import { Navigate } from 'react-router-dom';
import { passwordConfirmationCheck } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import inputObjects from '../../inputs.json';
import InputItem from '../CommonComponents/InputItem';

function SignUpForm() {

    const [values, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('POST', '/authentication/register', passwordConfirmationCheck);

    return (
        <> {
            response?.success ? <Navigate to='/email-sent' />
            :
            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <h2>Instructions</h2>
                <ul>
                    <li>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</li>
                    <li>Name must start and end with a letter, cannot contain a number, special characters, or consecutive spaces, 
                        and must be limited to 24 characters.</li>
                    <li>Email must be a Wesleyan email.</li>
                    <li>Password must contain between 6 and 32 characters.</li>
                    <li>If provided, phone number must contain exactly 10 digits. (Do not include '+1' or any non-numerical characters)</li>
                </ul>
                
                <InputItem
                    inputObject={inputObjects.name}
                    value={values.name}
                    handleChange={handleChange}
                />
                
                <br/>

                <InputItem
                    inputObject={inputObjects.email}
                    value={values.email}
                    handleChange={handleChange}
                />

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

                <h2>Contact information</h2>
                <p>Your personal phone number or social media accounts are NOT required for signing up. 
                    Providing them will make it easy for people to reach out to you.</p>

                <InputItem
                    inputObject={inputObjects.phone}
                    value={values.phone}
                    handleChange={handleChange}
                />

                <br/>

                <InputItem
                    inputObject={inputObjects.snapchat}
                    value={values.snapchat}
                    handleChange={handleChange}
                />

                <br/>

                <InputItem
                    inputObject={inputObjects.instagram}
                    value={values.instagram}
                    handleChange={handleChange}
                />

                <br/>

                <InputItem
                    inputObject={inputObjects.facebook}
                    value={values.facebook}
                    handleChange={handleChange}
                />

                <br/>

                {errorMessage ? <p>{errorMessage}<br/></p> : null}
                {requestInProcess ? <p>Loading...<br/></p> : null}

                <button type="submit">Register</button>
            </form> 
        } </>
    )
}

export default SignUpForm;