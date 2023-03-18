import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/styles.module.css';

function Navbar1() {
  return (
    <div className={styles.navBar}>
      <NavLink to='/' className={styles.navItem}>
        Wesrides
      </NavLink>
      <div className={styles.otherContainer}>
        <NavLink to='/' className={styles.navItem}>
          Home
        </NavLink>
        <NavLink to='/login' className={styles.navItem}>
          Login
        </NavLink>
        <NavLink to='/sign-up' className={styles.navItem}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar1;
