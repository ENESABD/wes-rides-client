import React from 'react';
import LogOut from '../components/ProfileComponents/LogOut';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';
import useAxios from '../hooks/useAxios';
import styles from '../styles/styles.module.css';

function Profile({ setIsAuthenticated }) {
  const [userData, error, isLoading] = useAxios('GET', '/user');

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          {error ? (
            <p className={styles.errorMessage}>There is some problem</p>
          ) : isLoading ? (
            <p className={styles.errorMessage}>Loading...</p>
          ) : (
            <ProfileDetails editable={true} userData={userData} />
          )}
          <div>
            <LogOut setIsAuthenticated={setIsAuthenticated} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
