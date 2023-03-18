import React from 'react';
import { Link } from 'react-router-dom';
import Rides from '../components/HomeComponents/Rides';
import styles from '../styles/styles.module.css';

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.postRideButton}>
        <Link to='/new-ride' className={styles.button}>
          Post a ride!
        </Link>
      </div>
      <Rides />
    </div>
  );
}

export default Home;
