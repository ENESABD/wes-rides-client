import React from 'react';
import InterestInRide from './InterestInRide';

function RideStatus({ rideInfo }) {


  if (rideInfo.status === "failed") {
    return <p>This ride has failed.</p>
  }

  if (rideInfo.status === "pending") {
    return <p>No one has shown interest in this ride.</p>
  }


  return (
    <div>
      <ul>
        {rideInfo.associated_ride_interests.map((ride_interest) => {
          return <InterestInRide ride_interest={ride_interest}/>
        })}
      </ul>
    </div>
  )
}

export default RideStatus;