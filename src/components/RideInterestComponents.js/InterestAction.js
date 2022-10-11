import React from 'react';

function InterestAction({ rideInterestId, status }) {

    if (status === "rejected") {
        return (<p>You have rejected this request.</p>);
    }

    if (status === "accepted") {
        return (<p>You have confirmed this request.</p>);
    }
    
    return (
        <div>
            <button>Confirm</button>
            <button>Reject</button>
        </div>
    )
}

export default InterestAction;