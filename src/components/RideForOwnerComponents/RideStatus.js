import React from 'react';
import InterestInRide from './InterestInRide';

function RideStatus({ rideStatus, associatedRideInterests }) {


  if (rideStatus === "failed") {
    return <p>This ride has failed.</p>
  }

  if (associatedRideInterests?.length === 0) {
    return <p>No one has shown interest in this ride.</p>
  }


  return (
    <div>
      <ul>
        {associatedRideInterests?.map((rideInterest) => {
          return <InterestInRide rideInterest={rideInterest}/>
        })}
      </ul>
    </div>
  )
}

export default RideStatus;