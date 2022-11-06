import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeDateDescription } from '../../commonFunctions';

function RideItem({ ride, isRideInterest }) {

    const [date, setDate] = useState("");
    
    useEffect(() => {
        let dateDescription = makeDateDescription([ride.start_date, ride.end_date]);
        if (!dateDescription?.includes('-')) {
            setDate('on ' + dateDescription);
        } else {
            setDate('during the period ' + dateDescription);
        }
    }, [ride.start_date, ride.end_date])

    return (
        <li className='card m-3 col-5'>

            <div className='card-header h-50'>{date}</div>
            <h5 className='card-title text-center my-3'>{ride.location}</h5>

            {ride.status === "failed" && <div>Failed</div>}
            {ride.status === "completed" && <div>Completed</div>}
            {ride.status === "confirmed" && <div>Confirmed</div>}
            {ride.status === "awaiting_confirmation" && <div>Some pending request(s)</div>}
            {ride.status === "pending" && <div>No requests to join this ride so far</div>}
            
            {ride.status === "awaiting_owner_decision" && <div>Request pending</div>}
            {ride.status === "accepted" && <div>Request accepted</div>}
            {ride.status === "rejected" && <div>Request denied</div>}


            <Link to={`/ride/${ride.ride_id}`} className='btn btn-dark mb-2'>
                See more
            </Link>

        </li>
    )
}

export default RideItem;