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

            <p>You have not yet taken any action regarding this request. 
                The user who made the request will be notified once you make a decision.
            </p>

            <button onClick={() => setConfirmationForAccepting(true)}
                className='btn btn-success me-3'>
                Confirm
            </button>

            {confirmationForAccepting &&
            <div>
            <div className='my-2'>Are you sure you want to confirm this request?</div>
            <button value="accepted" onClick={handleAction}
                className='btn btn-secondary me-3'>
                Yes
            </button>
            <button onClick={() => setConfirmationForAccepting(false)}
                className='btn btn-danger'>
                No
            </button>
            </div>
            }

            <button onClick={() => setConfirmationForRejecting(true)}
                className='btn btn-danger my-3'>
                Reject
            </button>

            {confirmationForRejecting &&
            <div>
            <div className='my-2'>Are you sure you want to deny this request?</div>
            <button value="rejected" onClick={handleAction}
                className='btn btn-danger me-3'>
                Yes
            </button>
            <button onClick={() => setConfirmationForRejecting(false)}
                className='btn btn-secondary'>
                No
            </button>
            </div>
            }
        </div>
    )
}

export default InterestAction;