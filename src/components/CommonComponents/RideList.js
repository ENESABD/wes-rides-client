import React from 'react';
import RideItem from './RideItem';

function RideList({ rides, isRideInterest }) {
  return (
    <div>
      <ul>
        {rides?.map((ride) => <RideItem key={ride.ride_id} ride={ride} isRideInterest={isRideInterest} />)}
      </ul>
    </div>
  )
}

export default RideList;