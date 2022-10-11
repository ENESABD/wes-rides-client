import React, { useState } from 'react';

function InterestSummary({ rideInterestInfo }) {
    const [date, setDate] = useState('on October 10, 2022.');

    return (
        <div>
            <p>Request by {rideInterestInfo.user_name} to join your trip to {rideInterestInfo.location} {date}</p>
        </div>
    )
}

export default InterestSummary;