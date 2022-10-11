import React, { useState } from 'react';

function NewRideForm() {
    const [message, setMessage] = useState();
    const [dateType, setDateType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log("Value changed");
    }

    const handleCheckboxChange = (e) => {
        e.preventDefault();
        console.log("Value changed");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>New Ride Form</h1>
            <h2>Instructions</h2>
            <ul>
                <li>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</li>
                <li>Location can only contain letters, numbers, spaces, or commas,
                    and must be limited to 50 characters.</li>
                <li>At least one filter must be true.</li>
                <li>Additional comments must be limited to 1500 characters.</li>
            </ul>
            
            <label htmlFor="location">
                Location <span aria-label="required">*</span>:
            </label>
            <input id="location" type="text" name="location" required={true} maxLength="24" pattern="^([a-zA-Z]+\s)*[a-zA-Z]+$" onChange={handleChange}/>
            
            <br/>

            <label htmlFor="date-type">Please choose one of the options:<span aria-label="required">*</span></label>
            
            <br/>
            <br/>
            
            <label htmlFor="interval">
                I am flexible within a time interval.
            </label>
            <input id="interval" type="radio" name="date-type" value="interval" required={true} hidden onChange={handleChange}/>

            <br/>
            <br/>

            <label htmlFor="exact">
                I have an exact date in mind.
            </label>
            <input id="exact" type="radio" name="date-type" value="exact" required={true} hidden onChange={handleChange}/>

            <br/>
            <br/>

            {dateType === "interval" ? 
            <>
            <input id="start-date" type="date" name="start-date" required={true} onChange={handleChange}/>
            <input id="end-date" type="date" name="end-date" required={true} onChange={handleChange}/>
            </>
            : null}

            {dateType === "exact" ? 
            
            <input id="exact-date" type="date" name="exact-date" required={true} onChange={handleChange}/>

            : null}

            <br/>
            <br/>

            <input type="checkbox" id="has-car" name="has-car" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="has-car">I am willing to drive my car and am looking for someone to join me</label>

            <br/>
            <br/>

            <input type="checkbox" id="wants-uber" name="wants-uber" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="wants-uber">I am willing to split an uber</label>

            <br/>
            <br/>

            <input type="checkbox" id="wants-car" name="wants-car" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="wants-car">I am willing to join someone who has a car</label>
        
            <br/>
            <br/>

            <label htmlFor="additional-comments">
                Additional comments:
            </label>
            <input id="additional-comments" type="text" name="additional-comments" maxLength="1500" onChange={handleChange}/>

            <br/>

            {message ? <p>{message}<br/></p> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default NewRideForm;