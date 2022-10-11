import React, { useState } from 'react';

function SignUpForm() {
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
            
            <label htmlFor="name">
                Name <span aria-label="required">*</span>:
            </label>
            <input id="name" type="text" name="name" required={true} maxLength="24" pattern="^([a-zA-Z]+\s)*[a-zA-Z]+$" onChange={handleChange}/>
            
            <br/>

            <label htmlFor="email">
                Email <span aria-label="required">*</span>:
            </label>
            <input id="email" type="email" name="email" required={true} onChange={handleChange}/>

            <br/>

            <label htmlFor="new-password">
                New password <span aria-label="required">*</span>:
            </label>
            <input id="new-password" type="password" name="new-password" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

            <br/>

            <label htmlFor="new-password2">
                Confirm new password <span aria-label="required">*</span>:
            </label>
            <input id="new-password2" type="password" name="new-password2" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

            <br/>

            <h2>Contact information</h2>
            <p>Your personal phone number or social media accounts are NOT required for signing up. 
                Providing them will make it easy for people to reach out to you.</p>

            <label htmlFor="phone">
                Phone number:
            </label>
            <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" onChange={handleChange}/>

            <br/>

            <label htmlFor="snapchat">
                Snapchat:
            </label>
            <input id="snapchat" type="text" name="snapchat" maxLength="50" onChange={handleChange}/>

            <br/>

            <label htmlFor="instagram">
                Instagram:
            </label>
            <input id="instagram" type="text" name="instagram" maxLength="50" onChange={handleChange}/>

            <br/>

            <label htmlFor="facebook">
                Facebook:
            </label>
            <input id="facebook" type="text" name="facebook" maxLength="50" onChange={handleChange}/>

            <br/>

            {message ? <p>{message}<br/></p> : null}

            <button type="submit">Register</button>
        </form>
    )
}

export default SignUpForm;