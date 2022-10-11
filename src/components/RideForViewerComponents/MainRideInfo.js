import React, { useEffect, useState } from 'react';

function MainRideInfo({ rideInfo }) {
    const [date, setDate] = useState("");
    const [filterDescription, setFilterDescription] = useState("");
    
    useEffect(() => {
        if (rideInfo.start_date === rideInfo.end_date) {
            let start_date = rideInfo.start_date;
            //start_date = convert(start_date);
            setDate(`on ${start_date}`);
        } else {
            let start_date = rideInfo.start_date;
            //start_date = convert(start_date);
            let end_date = rideInfo.end_date;
            //end_date = convert(end_date);
            setDate(`between ${start_date} and ${end_date}`);
        }
    }, [rideInfo])

    return (
        <section>
            <h2>Information about the ride</h2>
            <div>To {rideInfo.location}</div>
            <div>{date}.</div>
            <div>{filterDescription}</div>
            <div>{rideInfo.additional_comments}</div>
        </section>

    )
}

export default MainRideInfo;