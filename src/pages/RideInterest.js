import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import InterestAction from '../components/RideInterestComponents.js/InterestAction';
import ContactInfo from '../components/RideInterestComponents.js/ContactInfo';
import InterestSummary from '../components/RideInterestComponents.js/InterestSummary';

function RideInterest() {

  const [rideInterestInfo, setRideInterestInfo] = useState({
    status: "awaiting_confirmation",
    ride_id: "1",
    location: "Boston",
    user_name: "Someone1",
    user_email: "s@wes.edu",
    user_facebook: "S_Wes"
  });

  const { id } = useParams();



  return (
    <div>
      <InterestSummary rideInterestInfo={rideInterestInfo}/>
      <ContactInfo rideInterestInfo={rideInterestInfo} />
      <InterestAction status={rideInterestInfo.status} rideInterestID={id}/>
      <Link to={`/ride/${rideInterestInfo.ride_id}`}>Go to the related ride</Link>
    </div>
  )
}

export default RideInterest;