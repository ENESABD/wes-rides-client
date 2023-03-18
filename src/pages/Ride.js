import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import RideForOwner from './RideForOwner';
import RideForViewer from './RideForViewer';
import styles from '../styles/styles.module.css';

function Ride() {
  const [rideUrl, setRideUrl] = useState();
  const [rideInfo, errorMessage, isLoading] = useAxios('GET', rideUrl);
  const [isOwner, setIsOwner] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setRideUrl(`rides/${id}`);
    }
  }, [id]);

  useEffect(() => {
    if (rideInfo?.request_made_by_owner === true) {
      setIsOwner(true);
    }

    if (rideInfo?.request_made_by_owner === false) {
      setIsOwner(false);
    }
  }, [rideInfo]);

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          {errorMessage ? (
            <Navigate to='/not-found' replace={true} />
          ) : isLoading || !rideInfo ? (
            <p className={styles.errorMessage}>Loading...</p>
          ) : isOwner ? (
            <RideForOwner rideInfo={rideInfo} id={id} />
          ) : (
            <RideForViewer rideInfo={rideInfo} id={id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Ride;
