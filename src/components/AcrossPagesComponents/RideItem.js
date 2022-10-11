import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RideItem({ ride }) {

    const [date, setDate] = useState("");
    
    useEffect(() => {
        if (ride.start_date === ride.end_date) {
            let start_date = ride.start_date;
            //start_date = convert(start_date);
            setDate(`On ${start_date}`);
        } else {
            let start_date = ride.start_date;
            //start_date = convert(start_date);
            let end_date = ride.end_date;
            //end_date = convert(end_date);
            setDate(`Between ${start_date} and ${end_date}`);
        }
    }, [ride])

    return (
        <li key={ride.id}>
            <div>{ride.location}</div>
            <div>{date}</div>
            {ride.status ? <div>{ride.status}</div> : null}
            <Link to={`/ride/${ride.id}`}>See more</Link>
        </li>
    )
}

export default RideItem;