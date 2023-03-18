import React from 'react';
import { Navigate } from 'react-router-dom';
import { passwordConfirmationCheck } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import inputObjects from '../../inputs.json';
import InputItem from '../CommonComponents/InputItem';
import styles from '../../styles/styles.module.css';

function SignUpForm() {
  const [
    values,
    handleChange,
    handleSubmit,
    response,
    errorMessage,
    requestInProcess,
  ] = useFormWithRequest(
    'POST',
    '/authentication/register',
    passwordConfirmationCheck
  );

  return (
    <div className={styles.formContainer}>
      {response?.success ? (
        <Navigate to='/email-sent' />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Sign Up Form</h1>
          <h2>Instructions</h2>
          <ul>
            <li>
              Required fields are followed by{' '}
              <strong>
                <span aria-label='required'>*</span>
              </strong>
              .
            </li>
            <li>
              Name must start and end with a letter, cannot contain a number,
              special characters, or consecutive spaces, and must be limited to
              24 characters.
            </li>
            <li>Email must be a Wesleyan email.</li>
            <li>Password must contain between 6 and 32 characters.</li>
            <li>
              If provided, phone number must contain exactly 10 digits. (Do not
              include '+1' or any non-numerical characters)
            </li>
          </ul>

          <div className={styles.formInside}>
            <InputItem
              inputObject={inputObjects.name}
              value={values.name}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.email}
              value={values.email}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.new_password}
              value={values.new_password}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.new_password2}
              value={values.new_password2}
              handleChange={handleChange}
            />
          </div>

          <h2>Contact information</h2>
          <p>
            Your personal phone number or social media accounts are NOT required
            for signing up. Providing them will make it easy for people to reach
            out to you.
          </p>

          <div className={styles.formInside}>
            <InputItem
              inputObject={inputObjects.phone}
              value={values.phone}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.snapchat}
              value={values.snapchat}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.instagram}
              value={values.instagram}
              handleChange={handleChange}
            />

            <InputItem
              inputObject={inputObjects.facebook}
              value={values.facebook}
              handleChange={handleChange}
            />
          </div>

          {errorMessage ? (
            <p className={styles.errorMessage}>{errorMessage}</p>
          ) : null}
          {requestInProcess ? (
            <p className={styles.errorMessage}>Loading...</p>
          ) : null}

          <button className={styles.formButton} type='submit'>
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUpForm;
