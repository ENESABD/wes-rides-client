import React, { useEffect } from 'react';
import { noChange } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json';
import styles from '../../styles/styles.module.css';

function LoginForm({ setIsAuthenticated }) {
  const [
    values,
    handleChange,
    handleSubmit,
    response,
    errorMessage,
    requestInProcess,
  ] = useFormWithRequest('POST', '/authentication/login', noChange);

  useEffect(() => {
    if (response) {
      localStorage.setItem('jw_token', response.jw_token);
      setIsAuthenticated(true);
    }
  }, [response, setIsAuthenticated]);

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <p>
          Please enter your registered email and your WesRides password to
          login.
        </p>

        <InputItem
          inputObject={inputObjects.email}
          value={values.email}
          handleChange={handleChange}
        />

        <InputItem
          inputObject={inputObjects.password}
          value={values.password}
          handleChange={handleChange}
        />

        {errorMessage ? (
          <p className={styles.errorMessage}> {errorMessage}</p>
        ) : null}
        {requestInProcess ? (
          <p className={styles.errorMessage}>Loading...</p>
        ) : null}

        <button className={styles.formButton} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
