import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginComponents/LoginForm';
import styles from '../styles/styles.module.css';

function Login({ setIsAuthenticated }) {
  return (
    <div className={styles.body}>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <div className={styles.linkContainer}>
        <Link className={styles.linkTextFlex} to='/forgot-password'>
          Forgot password?
        </Link>
        <Link className={styles.linkTextFlex} to='/sign-up'>
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}

export default Login;
