import React from 'react';
import { Link } from 'react-router-dom';

function InterestInRide({ ride_interest }) {

   

    

    return (
        <li key={ride_interest.id}>

            <p>You have

            {ride_interest.status === "rejected" ? 
                <> rejected </>
            : null}

            {ride_interest.status === "accepted" ? 
                <> confirmed </>
            : null}

            {ride_interest.status === "awaiting_confirmation" ? 
                <> not taken any action regarding </>
            : null}
            
            {ride_interest.user_name}'s request to join this ride.</p>

            <Link to={`/ride-interest/${ride_interest.id}`}>See more</Link>

        </li>
    )
}

export default InterestInRide;