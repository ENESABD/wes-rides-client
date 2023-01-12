import React from 'react';
import { Link } from 'react-router-dom';

function InterestInRide({ rideInterest }) {
    return (
        <li key={rideInterest.ride_interest_id} style={{listStyle: 'none'}}
            className='card mt-3 col-5'>

            <p className='card-header'>You have

            {rideInterest.status === "rejected" ? 
                <> rejected </>
            : null}

            {rideInterest.status === "accepted" ? 
                <> confirmed </>
            : null}

            {rideInterest.status === "awaiting_owner_decision" ? 
                <> not taken any action regarding </>
            : null}
            
            {rideInterest.user_name}'s request to join this ride.</p>

            <Link to={`/ride-interest/${rideInterest.ride_interest_id}`}
                className='btn btn-dark'>See more</Link>

        </li>
    )
}

export default InterestInRide;