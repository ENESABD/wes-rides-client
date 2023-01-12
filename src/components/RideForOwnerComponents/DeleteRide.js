import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import Loading from '../CommonComponents/Loading';

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
            <ErrorMessage error={errorMessage}/>
            <Loading loading={requestInProcess}/>
            
            <button onClick={() => setConfirmDeletion(true)} className='btn btn-warning'>
                Delete this ride</button>
            {confirmDeletion &&
            <div>
                <p className='mt-2'>Are you sure you want to delete this ride?</p>
                <button onClick={handleClick} className='btn btn-danger'>
                    Yes</button>
                <button onClick={() => setConfirmDeletion(false)} 
                        className='btn btn-secondary ms-3'>
                    No</button>
            </div>
            }
        </div>
    )
}

export default DeleteRide;