import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeDateDescription } from '../../commonFunctions';
import styles from '../../styles/styles.module.css';

function RideItem({ ride, isRideInterest }) {
  const [date, setDate] = useState('');

  useEffect(() => {
    let dateDescription = makeDateDescription([ride.start_date, ride.end_date]);
    if (!dateDescription?.includes('-')) {
      setDate('on ' + dateDescription);
    } else {
      setDate('during the period ' + dateDescription);
    }
  }, [ride.start_date, ride.end_date]);

  return (
    <li className={styles.card}>
      <div className={styles.location}>{ride.location}</div>
      <div className={styles.date}>{date}</div>

      {ride.status === 'failed' && <div>Failed</div>}
      {ride.status === 'completed' && <div>Completed</div>}
      {ride.status === 'confirmed' && <div>Confirmed</div>}
      {ride.status === 'awaiting_confirmation' && !isRideInterest && (
        <div>Some pending request(s)</div>
      )}
      {ride.status === 'pending' && (
        <div>No requests to join this ride so far</div>
      )}

      {ride.status === 'awaiting_confirmation' && isRideInterest && (
        <div>Request pending</div>
      )}
      {ride.status === 'accepted' && <div>Request accepted</div>}
      {ride.status === 'rejected' && <div>Request denied</div>}

      <Link className={styles.seeMoreButton} to={`/ride/${ride.ride_id}`}>
        See more
      </Link>
    </li>
  );
}

export default RideItem;
