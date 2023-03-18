import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/styles.module.css';

function Navbar2() {
  return (
    <div className={styles.navBar}>
      <NavLink to='/' className={styles.navItem}>
        Wesrides
      </NavLink>
      <div className={styles.otherContainer}>
        <NavLink to='/' className={styles.navItem}>
          Home
        </NavLink>
        <NavLink to='/my-rides' className={styles.navItem}>
          My Rides
        </NavLink>
        <NavLink to='/profile' className={styles.navItem}>
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
