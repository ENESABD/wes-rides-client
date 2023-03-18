import React from 'react';
import styles from '../../styles/styles.module.css';

function LogOut({ setIsAuthenticated }) {
  const handleLogOut = () => {
    localStorage.removeItem('jw_token');
    setIsAuthenticated(false);
  };

  return (
    <button className={styles.formButton} onClick={handleLogOut}>
      Log out
    </button>
  );
}

export default LogOut;
