import React from 'react';
import { Link } from 'react-router-dom';
import EditableRideInfo from '../components/RideForOwnerComponents/EditableRideInfo';
import RideStatus from '../components/RideForOwnerComponents/RideStatus';
import DeleteRide from '../components/RideForOwnerComponents/DeleteRide';

function RideForOwner({ rideInfo }) {
  return (
    <div>
      <EditableRideInfo rideInfo={rideInfo} />
      <RideStatus rideInfo={rideInfo} />
      <DeleteRide rideInfo={rideInfo} />
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default RideForOwner;