import React from 'react';
import InterestInRide from './InterestInRide';

function RideStatus({ rideStatus, associatedRideInterests }) {


  if (rideStatus === "failed") {
    return <p>This ride has failed.</p>
  }

  if (rideStatus === "pending") {
    return <p>No one has shown interest in this ride.</p>
  }


  return (
    <div>
      <ul>
        {associatedRideInterests.map((ride_interest) => {
          return <InterestInRide ride_interest={ride_interest}/>
        })}
      </ul>
    </div>
  )
}

export default RideStatus;