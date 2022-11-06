import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RideInfo from '../components/CommonComponents/RideInfo';
import RideStatus from '../components/RideForOwnerComponents/RideStatus';
import DeleteRide from '../components/RideForOwnerComponents/DeleteRide';
import inputObjects from '../inputs.json';
import { captureRideTags } from '../commonFunctions';

function RideForOwner({ rideInfo, id }) {

  const [currentRideInfo, setCurrentRideInfo] = useState();

  useEffect(() => {
    setCurrentRideInfo(rideInfo);
  }, [rideInfo])
  
  let rideStatus = rideInfo.status;
  let editable =  rideStatus === 'awaiting_confirmation' ||
                  rideStatus === 'pending' ? true
                  : false;

    

  const noChangeWithSideEffect = ({values}) => {
    const value_key = Object.keys(values)[0];
    if (value_key) {
        setCurrentRideInfo((prevRideInfo => ({...prevRideInfo, [inputObjects[value_key].value_label]: values[value_key]})))
    }
    return values;
  }  

  const captureRideTagsWithSideEffect = ({event}) => {
    const updatedTags = captureRideTags({event});
    if (typeof(updatedTags) !== "string") {
      setCurrentRideInfo((prevRideInfo => ({...prevRideInfo, ...updatedTags })))
    }
    return updatedTags;
  }  

  return (
    <div>
      <RideInfo 
        id={id}
        editable={editable}
        rideLocation={currentRideInfo?.location}
        rideDates={[currentRideInfo?.start_date, currentRideInfo?.end_date]}
        rideComments={currentRideInfo?.additional_comments}
        rideTags={{has_car: currentRideInfo?.has_car, 
                  wants_car: currentRideInfo?.wants_car, 
                  wants_uber: currentRideInfo?.wants_uber}}
        noChangeWithSideEffect={noChangeWithSideEffect}
        captureRideTagsWithSideEffect={captureRideTagsWithSideEffect}
      />
      <RideStatus 
        rideStatus={rideStatus} 
        associatedRideInterests={currentRideInfo?.associated_ride_interests}
      />

      {(rideStatus === 'pending' ||
      rideStatus === 'awaiting_confirmation' ||
      rideStatus === 'failed') &&
      
      <DeleteRide id={id}/>
      }
      <Link to={'/my-rides'} className='btn btn-outline-secondary mt-3'>Go to my rides</Link>
    </div>
  )
}

export default RideForOwner;