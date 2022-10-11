import React, { useState } from 'react';

function ChangePassword() {

    const [isOpened, setIsOpened] = useState(false);
    const [newValue, setNewValue] = useState();
    const [message, setMessage] = useState();

    const handleOpen = () => {
        setIsOpened((prev) => !prev);
    }

    const handleUpdate = () => {
        setIsOpened(false);
        //API call
    }

    const handleChange = (e) => {
        setNewValue(e.target.value);
    }

    return (
        <div>
            <button onClick={handleOpen}>
                {!isOpened ? <div>Change Password</div> : <div>Cancel</div>}
            </button>
            {isOpened ? 
                <form onSubmit={handleUpdate}>
                    <p>Enter your old password.</p>
                    
                    <br/>

                    <label htmlFor="old-password">
                        Old password:
                    </label>
                    <input id="old-password" type="password" name="old-password" required={true} maxLength="32" minLength="6" onChange={handleChange}/>

                    <br/>

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
            : null}
        </div>
    )
}

export default ChangePassword;