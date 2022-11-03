import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/AxiosAbstraction/useAxios';

function DeleteRide({ id }) {

    const [request, setRequest] = useState([]);
    const [response, errorMessage, requestInProcess] = useAxios(...request);
    const [confirmDeletion, setConfirmDeletion] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (response?.success) {
            navigate('/my-rides');
        }
    }, [response, navigate])

    const handleClick = () => {
        setRequest(['DELETE', `/rides/${id}`]);
    }

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {requestInProcess && <p>Loading...</p>}
            
            <button onClick={() => setConfirmDeletion(true)}>Delete this ride</button>
            {confirmDeletion &&
            <div>
                <p>Are you sure?</p>
                <button onClick={handleClick}>Yes</button>
                <button onClick={() => setConfirmDeletion(false)}>No</button>
            </div>
            }
        </div>
    )
}

export default DeleteRide;