import React from 'react';
import RideItem from './RideItem';

function RideList({ rides }) {
  return (
    <div>
      <ul>
        {rides.map((ride) => <RideItem ride={ride} />)}
      </ul>
    </div>
  )
}

export default RideList;