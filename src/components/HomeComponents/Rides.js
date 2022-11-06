import React, { useState } from 'react';
import RideSearch from './RideSearch';
import RideList from '../CommonComponents/RideList';
import useAxios from '../../hooks/useAxios';
import Loading from '../CommonComponents/Loading';
import ErrorMessage from '../CommonComponents/ErrorMessage';

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

            <p>(Your rides won't appear here. Go to my rides to see your rides.)</p>

            {isLoading ? <Loading loading={true}/> :
            errorMessage ? <ErrorMessage error={errorMessage} /> :
            rides && <RideList rides={rides.rides}/>
            }
        </div>
    )
}

export default Rides;