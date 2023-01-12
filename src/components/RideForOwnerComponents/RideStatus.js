import React from 'react';
import InterestInRide from './InterestInRide';

function RideStatus({ rideStatus, associatedRideInterests }) {


    if (rideStatus === "failed") {
        return <p className='my-3'>This ride has failed.</p>
    }

    if (associatedRideInterests?.length === 0) {
        return <p className='my-3'>No one has shown interest in this ride.</p>
    }


    return (
        <ul className='row'>
            {associatedRideInterests?.map((rideInterest) => {
                return <InterestInRide rideInterest={rideInterest}/>
            })}
        </ul>
    )
}

export default RideStatus;