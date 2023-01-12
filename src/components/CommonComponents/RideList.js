import React from 'react';
import RideItem from './RideItem';

function RideList({ rides, isRideInterest }) {
  return (
    <ul className='row w-75'>
      {rides?.map((ride) => <RideItem key={ride.ride_id} ride={ride} isRideInterest={isRideInterest} />)}
    </ul>
  )
}

export default RideList;