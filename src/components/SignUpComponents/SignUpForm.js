import React from 'react';
import { Navigate } from 'react-router-dom';
import { passwordConfirmationCheck } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import inputObjects from '../../inputs.json';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import InputItem from '../CommonComponents/InputItem';
import Loading from '../CommonComponents/Loading';

function SignUpForm() {

    const [values, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('POST', '/authentication/register', passwordConfirmationCheck);

    return (
        <> {
            response?.success ? <Navigate to='/email-sent'/>
            :
            <form onSubmit={handleSubmit} className=''>
                <h1>Sign Up Form</h1>
                <ul className='list-group m-3'>
                    <li className='list-group-item'>
                        Required fields are followed by <strong><span aria-label="required">*</span></strong>.</li>
                    <li className='list-group-item'>
                        Name must start and end with a letter, cannot contain a number, special characters, or consecutive spaces, 
                        and must be limited to 24 characters.</li>
                    <li className='list-group-item'>
                        Email must be a Wesleyan email.</li>
                    <li className='list-group-item'>
                        Password must contain between 6 and 32 characters.</li>
                    <li className='list-group-item'>
                        If provided, phone number must contain exactly 10 digits. (Do not include '+1' or any non-numerical characters)</li>
                </ul>

                <h2>Basics</h2>
                
                <InputItem
                    inputObject={inputObjects.name}
                    value={values.name}
                    handleChange={handleChange}
                />
                
                

                <InputItem
                    inputObject={inputObjects.email}
                    value={values.email}
                    handleChange={handleChange}
                />

                

                <InputItem
                    inputObject={inputObjects.new_password}
                    value={values.new_password}
                    handleChange={handleChange}
                />

                

                <InputItem
                    inputObject={inputObjects.new_password2}
                    value={values.new_password2}
                    handleChange={handleChange}
                />

                

                <h2>Contact information</h2>
                <p>Your personal phone number or social media accounts are NOT required for signing up. 
                    Providing them will make it easy for people to reach out to you.</p>

                <InputItem
                    inputObject={inputObjects.phone}
                    value={values.phone}
                    handleChange={handleChange}
                />

                

                <InputItem
                    inputObject={inputObjects.snapchat}
                    value={values.snapchat}
                    handleChange={handleChange}
                />

                

                <InputItem
                    inputObject={inputObjects.instagram}
                    value={values.instagram}
                    handleChange={handleChange}
                />

                

                <InputItem
                    inputObject={inputObjects.facebook}
                    value={values.facebook}
                    handleChange={handleChange}
                />

                

                <ErrorMessage error={errorMessage}/>
                <Loading loading={requestInProcess}/>

                <button type="submit" className='btn btn-primary'>Register</button>
            </form> 
        } </>
    )
}

export default SignUpForm;