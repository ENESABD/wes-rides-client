import React, { useState } from 'react';
import RideSearch from './RideSearch';
import RideList from '../CommonComponents/RideList';
import useAxios from '../../hooks/useAxios';
import styles from '../../styles/styles.module.css';

function Rides() {
  const [tags, setTags] = useState({
    has_car: true,
    wants_car: true,
    wants_uber: true,
  });
  const [searchWord, setSearchWord] = useState('');
  const [rides, errorMessage, isLoading] = useAxios(
    'GET',
    `/rides?has_car=${tags.wants_car}` +
      `&wants_car=${tags.has_car}` +
      `&wants_uber=${tags.wants_uber}` +
      `&search_word=${searchWord}`
  );

  return (
    <div className={styles.main}>
      <RideSearch setSearchWord={setSearchWord} tags={tags} setTags={setTags} />

      <div>
        <p className={styles.extraText}>
          (Your rides won't show up here. Go to My Rides to see your rides.)
        </p>

        {isLoading ? (
          <p className={styles.errorMessage}>Loading...</p>
        ) : errorMessage ? (
          <p className={styles.errorMessage}>{errorMessage}</p>
        ) : (
          rides && <RideList rides={rides.rides} />
        )}
      </div>
    </div>
  );
}

export default Rides;
