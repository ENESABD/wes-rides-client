import React, { useEffect, useState } from 'react';
import { makeDateDescription } from '../../commonFunctions';

function InterestSummary({ userInterested, rideLocation, rideDates }) {
    const [date, setDate] = useState();

    useEffect(() => {
        let dateDescription = makeDateDescription(rideDates);
        if (dateDescription?.includes('-')) {
            setDate('on ' + dateDescription);
        } else {
            setDate('during the period ' + dateDescription);
        }
    }, [rideDates])

    return (
        <div>
            <p>Request by {userInterested} to join your trip to {rideLocation} {date}</p>
        </div>
    )
}

export default InterestSummary;