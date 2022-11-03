import React, { useEffect, useState } from 'react';
import Edit from '../CommonComponents/Edit';
import inputObjects from '../../inputs.json';
import { formatRideDates, makeDateDescription } from '../../commonFunctions';
import ChooseTags from './ChooseTags';

function RideInfo({ id, editable, rideLocation, rideDates, rideTags, rideComments, noChangeWithSideEffect, captureRideTagsWithSideEffect }) {
    const [date, setDate] = useState("");

    const formatRideDatesWithSideEffect = ({event}) => {
        let updatedRideDates = formatRideDates({event});
        if (typeof(updatedRideDates) !== "string") {
            let { start_date, end_date } = updatedRideDates;
            setDate(makeDateDescription([start_date, end_date]));
        }
        return updatedRideDates;
    }
    
    

    useEffect(() => {
        setDate(makeDateDescription(rideDates))
    }, [rideDates])
    
    

    return (
        <section>
            <h2>Information about the ride</h2>

            <div>Destination: {rideLocation}</div>
            {editable &&
                <Edit 
                    inputObject={inputObjects.location}
                    prevValue={rideLocation}  
                    formType={'single-input'} 
                    requestUrl={`/rides/${id}`}
                    formattingFunction={noChangeWithSideEffect}
                />  
            }
            <div>Date(s): {date}</div>
            {editable &&
                <Edit 
                    prevValue={rideDates}  
                    formType={'dates'} 
                    requestUrl={`/rides/${id}`}
                    formattingFunction={formatRideDatesWithSideEffect}
                />  
            } 

            <div>Tag(s): </div>
            <ChooseTags tags={rideTags} isDisabled={true}/>
            {editable &&
                <Edit 
                    prevValue={rideTags}
                    formType={'tags'}
                    requestUrl={`/rides/${id}`}
                    formattingFunction={captureRideTagsWithSideEffect}
                /> 
            }       
            
            {rideComments ? <div>Notes: {rideComments}</div> : <div>Notes: None</div>}
            {editable &&
                <Edit 
                    inputObject={inputObjects.additional_comments}
                    prevValue={rideComments}  
                    formType={'single-input'} 
                    requestUrl={`/rides/${id}`}
                    formattingFunction={noChangeWithSideEffect}
                />  
            }
        </section>

    )
}

export default RideInfo;