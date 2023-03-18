import React from 'react';
import styles from '../../styles/styles.module.css';

function InputItem({ inputObject, prevValue, value, noLabel, handleChange }) {
  return (
    <div>
      {!noLabel && (
        <label htmlFor={inputObject.name}>
          {inputObject.label}
          {inputObject.required && <span aria-label='required'>*</span>}:
        </label>
      )}

      <input
        id={inputObject.name}
        name={inputObject.name}
        type={inputObject.type}
        required={inputObject.required}
        pattern={inputObject.pattern}
        maxLength={inputObject.maxLength}
        minLength={inputObject.minLength}
        value={value !== undefined ? value : prevValue || ''}
        onChange={handleChange}
        className={styles.formInput}
        placeholder={inputObject.label}
      />
    </div>
  );
}

export default InputItem;
