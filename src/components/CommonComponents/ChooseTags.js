import React from 'react';
import styles from '../../styles/styles.module.css';

function ChooseTags({ tags, isDisabled, handleChange }) {
  let tagInputs = [
    ['has_car', "I'm driving"], //I am willing to drive my car; just looking for someone to join me
    ['wants_uber', 'Split Uber'], // I am willing to split an uber
    ['wants_car', 'Need Car'],
  ]; // I am willing to join someone who has a car

  return (
    <div className={styles.filter}>
      {tagInputs.map((tagInput) => {
        let [name, label] = tagInput;
        return (
          <li key={name} className={styles.checkbox}>
            <input
              type='checkbox'
              id={name}
              name={name}
              defaultChecked={!tags ? null : tags[name]}
              disabled={isDisabled}
              onChange={handleChange}
              className={styles.input}
            />
            <label className={styles.label} htmlFor={name}>
              {label}
            </label>
          </li>
        );
      })}
    </div>
  );
}

export default ChooseTags;
