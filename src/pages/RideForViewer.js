import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainRideInfo from '../components/RideForViewerComponents/MainRideInfo';
import RideOwnerInfo from '../components/RideForViewerComponents/RideOwnerInfo';
import RideInterestStatus from '../components/RideForViewerComponents/RideInterestStatus';

function RideForViewer({ rideInfo }) { 
  return (
    <div>
      <MainRideInfo rideInfo={rideInfo} />
      <RideOwnerInfo rideInfo={rideInfo} />
      <RideInterestStatus rideInfo={rideInfo}/>
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default RideForViewer;