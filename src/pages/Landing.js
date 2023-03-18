import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/styles.module.css';

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.header}>
        <h1 className={styles.textHeading}>Welcome to WesRides!</h1>
        <Link to='/sign-up' className={styles.signup}>
          Sign Up
        </Link>
        <Link to='/login' className={styles.login}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Landing;
