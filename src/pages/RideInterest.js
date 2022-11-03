import React from 'react';
import { Link, useParams } from 'react-router-dom';
import InterestAction from '../components/RideInterestComponents.js/InterestAction';
import InterestSummary from '../components/RideInterestComponents.js/InterestSummary';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';
import useAxios from '../hooks/AxiosAbstraction/useAxios';

function RideInterest() {
  
  const { id } = useParams();
  const [rideInterestInfo, errorMessage, isLoading] = useAxios('GET', `/ride-interests/${id}`);

  let userData = {
    user_name: rideInterestInfo?.user_name,
    user_email: rideInterestInfo?.user_email,
    user_phone_number: rideInterestInfo?.user_phone_number,
    user_facebook: rideInterestInfo?.user_facebook,
    user_instagram: rideInterestInfo?.user_instagram,
    user_snapchat: rideInterestInfo?.user_snapchat
  }


  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {isLoading && <p>Loading...</p>}

      <InterestSummary 
        userInterested={rideInterestInfo?.user_name}
        rideLocation={rideInterestInfo?.location}
        rideDates={[rideInterestInfo?.start_date, rideInterestInfo?.end_date]}
      />

      <h2>Contact Information</h2>
      <ProfileDetails editable={false} userData={userData} onlyContactInfo={true}/>

      <InterestAction status={rideInterestInfo?.status} rideInterestId={id}/>

      <Link to={`/ride/${rideInterestInfo?.ride_id}`}>Go to the related ride</Link>
    </div>
  )
}

export default RideInterest;