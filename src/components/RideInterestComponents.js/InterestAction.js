import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

function InterestAction({ rideInterestId, status }) {

    const [requestBody, setRequestBody] = useState();
    const [response, errorMessage, requestInProgress] = 
        useAxios('PUT', `/ride-interests/${rideInterestId}`, requestBody);
    const [confirmationForAccepting, setConfirmationForAccepting] = useState(false);
    const [confirmationForRejecting, setConfirmationForRejecting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (response?.success) {
            navigate(0);
        }
    }, [response, navigate])

    if (status === "rejected") {
        return (<p>You have rejected this request.</p>);
    }

    if (status === "accepted") {
        return (<p>You have confirmed this request.</p>);
    }
    
    const handleAction = (e) => {
        setRequestBody({status: e.target.value});
    }

    return (
        <div>
            {requestInProgress && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}

            <button onClick={() => setConfirmationForAccepting(true)}>
                Confirm
            </button>

            {confirmationForAccepting &&
            <div>
            <div>Are you sure you want to confirm this request?</div>
            <button value="accepted" onClick={handleAction}>
                Yes
            </button>
            <button onClick={() => setConfirmationForAccepting(false)}>
                No
            </button>
            </div>
            }

            <button onClick={() => setConfirmationForRejecting(true)}>
                Reject
            </button>

            {confirmationForRejecting &&
            <div>
            <div>Are you sure you want to deny this request?</div>
            <button value="rejected" onClick={handleAction}>
                Yes
            </button>
            <button onClick={() => setConfirmationForRejecting(false)}>
                No
            </button>
            </div>
            }
        </div>
    )
}

export default InterestAction;