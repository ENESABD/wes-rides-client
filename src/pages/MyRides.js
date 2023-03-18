import React from 'react';
import { Link } from 'react-router-dom';
import RideList from '../components/CommonComponents/RideList';
import useAxios from '../hooks/useAxios';
import styles from '../styles/styles.module.css';

function MyRides() {
  const [myPostings, myPostingsError, myPostingsLoading] = useAxios(
    'GET',
    '/rides/user'
  );
  const [myRequests, myRequestsError, myRequestsLoading] = useAxios(
    'GET',
    '/ride-interests'
  );

  return (
    <div className={styles.body}>
      <h2 className={styles.headingTwo}>My Postings</h2>
      <div className={styles.postRideButton}>
        <Link to='/new-ride' className={styles.postButton}>
          Post a new ride!
        </Link>
      </div>

      {myPostingsLoading && <p className={styles.errorMessage}>Loading...</p>}
      {myPostingsError ? (
        <p className={styles.errorMessage}>{myPostingsError}</p>
      ) : (
        <RideList rides={myPostings?.rides} />
      )}

      <h2 className={styles.headingTwoFive}>My Requests</h2>
      {myRequestsLoading && <p className={styles.errorMessage}>Loading...</p>}
      {myRequestsError ? (
        <p className={styles.errorMessage}>{myRequestsError}</p>
      ) : (
        <RideList rides={myRequests?.ride_interests} isRideInterest={true} />
      )}
    </div>
  );
}

export default MyRides;
