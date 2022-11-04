import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isFutureDate } from '../../commonFunctions';
import useAxios from '../../hooks/useAxios';

function RideInterestStatus({ rideInterest, rideStartDate, id }) {

  const [request, setRequest] = useState([]);
  const [response, errorMessage, requestInProcess] = useAxios(...request);

  const [isCompleted, setIsCompleted] = useState();

  useEffect(() => {
    if (rideInterest.status === 'accepted') {
      if (isFutureDate(rideStartDate)) {
        setIsCompleted(false);
      } else {
        setIsCompleted(true);
      }
    }
  }, [rideInterest.status, rideStartDate])

  const navigate = useNavigate();

  useEffect(() => {
    if (response?.success) {
      navigate(0);
    }
  }, [response, navigate])
  
  const handleShowInterest = () => {
    setRequest(['POST', '/ride-interests', {ride_id: id}]);
  }

  const handleDeleteInterest = () => {
    setRequest(['DELETE', `/ride-interests/${rideInterest.id}`]);
  }

  return (
    <div>
      {!rideInterest.status &&
        <button onClick={handleShowInterest}>Indicate interest</button>
      }

      {rideInterest.status === 'awaiting_confirmation' &&
      <>
        <p>You have made a request to join this ride and it is awaiting confirmation by the owner of the post.</p>
        <button onClick={handleDeleteInterest}>Cancel request</button>
      </>
      }

      {rideInterest.status === 'rejected' &&
        <p>The owner of the post rejected your request to join their ride.</p>
      }

      {rideInterest.status === 'accepted' && !isCompleted &&
        <p>The owner of the post has accepted your request to join their ride. 
          So, they are set to have this ride with you.</p>
      }

      {rideInterest.status === 'accepted' && isCompleted &&
        <p>The owner of the post had accepted your request to join their ride. 
          So, they hopefully had this ride with you.</p>
      }

      {requestInProcess && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default RideInterestStatus;