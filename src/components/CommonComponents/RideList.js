import React from 'react';
import RideItem from './RideItem';
import styles from '../../styles/styles.module.css';

function RideList({ rides, isRideInterest }) {
  return (
    <div>
      <ul className={styles.cardContainer}>
        {rides?.map((ride) => (
          <RideItem
            key={ride.ride_id}
            ride={ride}
            isRideInterest={isRideInterest}
          />
        ))}
      </ul>
    </div>
  );
}

export default RideList;
