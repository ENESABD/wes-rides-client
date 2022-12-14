import React, { useState } from 'react';
import RideSearch from './RideSearch';
import RideList from '../CommonComponents/RideList';
import useAxios from '../../hooks/useAxios';

function Rides() {

    const [tags, setTags] = useState({
        has_car: true,
        wants_car: true,
        wants_uber: true
    })
    const [searchWord, setSearchWord] = useState("");
    const [rides, errorMessage, isLoading] = useAxios('GET', `/rides?has_car=${tags.wants_car}` 
                                                            + `&wants_car=${tags.has_car}`
                                                            + `&wants_uber=${tags.wants_uber}`
                                                            + `&search_word=${searchWord}`);



    return (
        <div>
            <RideSearch setSearchWord={setSearchWord} tags={tags} setTags={setTags}/>
            
            <br/>

            <p>(Your rides won't show up here. Go to my rides to see your rides.)</p>

            {isLoading ? <p>Loading...</p> :
            errorMessage ? <p>{errorMessage}</p> :
            rides && <RideList rides={rides.rides}/>
            }
        </div>
    )
}

export default Rides;