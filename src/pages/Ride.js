import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import RideForOwner from './RideForOwner';
import RideForViewer from './RideForViewer';

function Ride() {

  const [rideInfo, setRideInfo] = useState({
    location: "Boston", additional_comments:"I am cool", 
    status: "awaiting_confirmation", associated_ride_interests: [
      {id: 1, status: 'awaiting_confirmation', user_name: 'Someone1'},
      {id: 2, status: 'awaiting_confirmation', user_name: 'Someone2'},
      {id: 3, status: 'rejected', user_name: 'Someone3'}
    ]});
  const [isOwner, setIsOwner] = useState(true);

  const { id } = useParams();

  if (!rideInfo.location) {
    return <Navigate to="/not-found" replace={true} />
  }

  return (
    <div>
      {isOwner ? <RideForOwner rideInfo={rideInfo}/> : <RideForViewer rideInfo={rideInfo}/>}
    </div>
  )
}

export default Ride;