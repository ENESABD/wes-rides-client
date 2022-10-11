import React, { useState } from 'react';

function DeleteRide({ rideInfo }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
        } else {
            //delete ride, redirect to my rides page
        }
    }

    return (
        <div>
            {isClicked ? <p>Are you sure?</p> : null}
            <button onClick={handleClick}>
                {isClicked ? <>Yes</> 
                    : <>Delete this ride</>}
            </button>
        </div>
    )
}

export default DeleteRide;