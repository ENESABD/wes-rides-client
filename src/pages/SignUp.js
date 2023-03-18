import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpComponents/SignUpForm';
import styles from '../styles/styles.module.css';

function SignUp() {
  return (
    <div className={styles.body}>
      <SignUpForm />
      <Link to='/login'>Already have an account?</Link>
    </div>
  );
}

export default SignUp;
