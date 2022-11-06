import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/CommonComponents/Loading';
import RideList from '../components/CommonComponents/RideList';
import useAxios from '../hooks/useAxios';

function MyRides() {

    const [myPostings, myPostingsError, myPostingsLoading] = useAxios('GET', '/rides/user');
    const [myRequests, myRequestsError, myRequestsLoading] = useAxios('GET', '/ride-interests');

    return (
        <main className='p-2'>
            <h2>My Postings</h2>
            <Link to="/new-ride" className='btn btn-primary my-3'>Post a ride!</Link>


            <Loading loading={myPostingsLoading}/>
            {myPostingsError ? <p>{myPostingsError}</p> :
            <RideList rides={myPostings?.rides}/>}

            <h2>My Requests</h2>
            <Loading loading={myRequestsLoading}/>
            {myRequestsError ? <p>{myRequestsError}</p> :
            <RideList rides={myRequests?.ride_interests} isRideInterest={true}/>}
        </main>
    )
}

export default MyRides;