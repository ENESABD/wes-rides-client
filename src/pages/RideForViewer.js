import React from 'react';
import { Link } from 'react-router-dom';
import RideInterestStatus from '../components/RideForViewerComponents/RideInterestStatus';
import RideInfo from '../components/CommonComponents/RideInfo';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';

function RideForViewer({ rideInfo, id }) { 
  let userData = {
    user_name: rideInfo.user_name,
    user_email: rideInfo.user_email,
    user_phone_number: rideInfo.user_phone_number,
    user_snapchat: rideInfo.user_snapchat,
    user_instagram: rideInfo.user_instagram,
    user_facebook: rideInfo.user_facebook
  }

  let rideInterest = {
    id: rideInfo.ride_interest_id,
    status: rideInfo.ride_interest_status
  }

  return (
    <div>
      <RideInfo
        editable={false}
        rideLocation={rideInfo.location}
        rideDates={{start_date: rideInfo.start_date, 
                    end_date: rideInfo.end_date}}
        rideComments={rideInfo.additional_comments}
        rideTags={{has_car: rideInfo.has_car, 
                  wants_car: rideInfo.wants_car, 
                  wants_uber: rideInfo.wants_uber}}
      />

      <ProfileDetails editable={false} userData={userData}/>

      <RideInterestStatus 
        rideInterest={rideInterest} 
        id={id} 
        rideStartDate={rideInfo.start_date}
      />
      
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default RideForViewer;