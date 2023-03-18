import React from 'react';
import ChooseTags from '../CommonComponents/ChooseTags';
import styles from '../../styles/styles.module.css';

function RideSearch({ setSearchWord, tags, setTags }) {
  const toggleTags = (e) => {
    setTags((prevTags) => ({ ...prevTags, [e.target.name]: e.target.checked }));
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type='text'
          id='search-ride'
          placeholder='Search a ride...'
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      <ChooseTags tags={tags} isDisabled={false} handleChange={toggleTags} />
    </div>
  );
}

export default RideSearch;
