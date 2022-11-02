import React, { useState } from 'react';
import RideSearch from './RideSearch';
import RideList from '../CommonComponents/RideList';

function Rides() {

    const [rides, setRides] = useState([
        {id: 1, location: "Boston", start_date: "10-09-2022", end_date: "10-09-2022"},
        {id: 2, location: "Foston", start_date: "11-09-2022", end_date: "15-09-2022"}
      ]);


    return (
        <div>
            <RideSearch/>
            <RideList rides={rides}/>
        </div>
    )
}

export default Rides;