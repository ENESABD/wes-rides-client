import React, { useState } from 'react';

function LoginForm() {
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
            <h1>Login Form</h1>
            <p>Please enter your registered email and your WesRides password to login.</p>
        
            <br/>

            <label htmlFor="email">
                Email:
            </label>
            <input id="email" type="email" name="email" required={true} onChange={handleChange}/>

            <br/>

            <label htmlFor="password">
                Password:
            </label>
            <input id="password" type="password" name="password" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

            <br/>

            {message ? <p>{message}<br/></p> : null}

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;