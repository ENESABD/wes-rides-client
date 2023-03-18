import React from 'react';
import { Link } from 'react-router-dom';
import ResetRequestForm from '../components/ForgotPasswordComponents/ResetRequestForm';
import styles from '../styles/styles.module.css';

function ForgotPassword() {
  return (
    <div className={styles.body}>
      <ResetRequestForm />
      <div className={styles.linkContainer}>
        <Link className={styles.linkText} to={'/login'}>
          Go to the login page
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
