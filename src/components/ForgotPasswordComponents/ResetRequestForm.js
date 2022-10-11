import React, { useState } from 'react';

function ResetRequestForm() {
    const [message, setMessage] = useState();

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
            <p>Please enter your registered email and click on the button below. 
                You will then be emailed a password reset link.</p>
        
            <br/>

            <label htmlFor="email">
                Email:
            </label>
            <input id="email" type="email" name="email" required={true} onChange={handleChange}/>

            <br/>

            {message ? <p>{message}<br/></p> : null}

            <button type="submit">Reset password</button>
        </form>
    )
}

export default ResetRequestForm;