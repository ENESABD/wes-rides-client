import React, { useEffect, useState } from 'react';
import { isFutureDate } from '../../commonFunctions';
import useAxios from '../../hooks/AxiosAbstraction/useAxios';

function RideInterestStatus({ rideInterest, rideStartDate, id }) {

  const [request, setRequest] = useState([]);
  const [response, errorMessage, requestInProcess] = useAxios(...request);

  let isCompleted = false;

  useEffect(() => {
    if (rideInterest.status === 'accepted') {
      if (isFutureDate(rideStartDate)) {
        isCompleted = false;
      } else {
        isCompleted = true;
      }
    }
  }, [rideInterest.status])
  
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
        <p>You have already made a request to join this ride and it is awaiting confirmation by the owner of the post.</p>
        <button onClick={handleDeleteInterest}>Cancel request</button>
      </>
      }

      {rideInterest.status === 'rejected' &&
        <p>The owner of the post rejected your request to join their ride.</p>
      }

      {!rideInterest.status === 'accepted' && isCompleted &&
        <p>The owner of the post has accepted your request to join their ride. 
          So, they are set to have this ride with you.</p>
      }

      {!rideInterest.status === 'accepted' && !isCompleted &&
        <p>The owner of the post had accepted your request to join their ride. 
          So, they hopefully had this ride with you.</p>
      }

      {requestInProcess && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default RideInterestStatus;