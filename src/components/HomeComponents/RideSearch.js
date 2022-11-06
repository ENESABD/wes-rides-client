import React from 'react';
import ChooseTags from '../CommonComponents/ChooseTags';

function RideSearch({ setSearchWord, tags, setTags }) {

    const toggleTags = (e) => {
        setTags(prevTags => ({...prevTags, [e.target.name]: e.target.checked}));
    }

    return (
        <div>
            <input type="text" id="search-ride" placeholder='Search a ride...' 
                onChange={(e) => setSearchWord(e.target.value)}
                className='form-control'/>
            
            <ChooseTags tags={tags} isDisabled={false} handleChange={toggleTags}/>
        </div>
    )
}

export default RideSearch;