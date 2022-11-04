import React from 'react';
import { Link } from 'react-router-dom';
import RideList from '../components/CommonComponents/RideList';
import useAxios from '../hooks/useAxios';

function MyRides() {

  const [myPostings, myPostingsError, myPostingsLoading] = useAxios('GET', '/rides/user');
  const [myRequests, myRequestsError, myRequestsLoading] = useAxios('GET', '/ride-interests');

  return (
    <div>
      
      <h2>My Postings</h2>
      <Link to="/new-ride">Post a new ride!</Link>

      {myPostingsLoading && <p>Loading...</p>}
      {myPostingsError ? <p>{myPostingsError}</p> :
      <RideList rides={myPostings?.rides}/>}

      <br/>
      <br/>

      <h2>My Requests</h2>
      {myRequestsLoading && <p>Loading...</p>}
      {myRequestsError ? <p>{myRequestsError}</p> :
      <RideList rides={myRequests?.ride_interests} isRideInterest={true}/>}
    
    </div>
  )
}

export default MyRides;