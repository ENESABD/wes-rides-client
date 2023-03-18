import React from 'react';
import { Link } from 'react-router-dom';
import NewRideForm from '../components/NewRideComponents/NewRideForm';
import styles from '../styles/styles.module.css';

function NewRide() {
  return (
    <div className={styles.body}>
      <NewRideForm />
      <div className={styles.link}>
        <Link to={'/my-rides'} className={styles.linkText}>
          Go to my rides
        </Link>
      </div>
    </div>
  );
}

export default NewRide;
