import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PasswordResetForm() {
    const [message, setMessage] = useState();

    const { jwt } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log("Value changed");
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a new password. It must contain between 6 and 32 characters.</p>
            
            <br/>

            <label htmlFor="new-password">
                New password:
            </label>
            <input id="new-password" type="password" name="new-password" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

            <br/>

            <label htmlFor="new-password2">
                Confirm new password:
            </label>
            <input id="new-password2" type="password" name="new-password2" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

            <br/>

            {message ? <p>{message}<br/></p> : null}

            <button type="submit">Set the new password</button>
        </form>
    )
}

export default PasswordResetForm;