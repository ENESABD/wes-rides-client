import React, { useState } from 'react';

function Edit({ param, paramType, paramValue }) {

    const [isOpened, setIsOpened] = useState(false);
    const [newValue, setNewValue] = useState(paramValue);
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
                {!isOpened ? <div>Edit</div> : <div>Cancel</div>}
            </button>
            {isOpened ? 
            <div>
                <input type={paramType} value={newValue} onChange={handleChange}/>
                <button onClick={handleUpdate}></button>
                {message ? <p>{message}<br/></p> : null}
            </div>
            : null}
        </div>
    )
}

export default Edit;