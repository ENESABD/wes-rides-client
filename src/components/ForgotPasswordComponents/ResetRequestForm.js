import React from 'react';
import { Navigate } from 'react-router-dom';
import { noChange } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json';
import styles from '../../styles/styles.module.css';

function ResetRequestForm() {
  const [
    value,
    handleChange,
    handleSubmit,
    response,
    errorMessage,
    requestInProcess,
  ] = useFormWithRequest('POST', '/authentication/forgot-password', noChange);

  return (
    <div className={styles.formContainer}>
      {response?.success ? (
        <Navigate to='/email-sent' />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>
            Please enter your registered email and click on the button below.
            You will then be emailed a password reset link.
          </p>

          <InputItem
            inputObject={inputObjects.email}
            value={value.email}
            handleChange={handleChange}
          />

          {errorMessage && <p>{errorMessage}</p>}
          {requestInProcess && <p>Loading...</p>}

          <button className={styles.formButton} type='submit'>
            Reset password
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetRequestForm;
