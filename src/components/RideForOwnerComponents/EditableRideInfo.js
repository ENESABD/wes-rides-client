import React, { useEffect, useState } from 'react';
import Edit from '../AcrossPagesComponents/Edit';

function EditableRideInfo({ rideInfo }) {
    const [date, setDate] = useState("");
    
    useEffect(() => {
        if (rideInfo.start_date === rideInfo.end_date) {
            let start_date = rideInfo.start_date;
            //start_date = convert(start_date);
            setDate(`on ${start_date}`);
        } else {
            let start_date = rideInfo.start_date;
            //start_date = convert(start_date);
            let end_date = rideInfo.end_date;
            //end_date = convert(end_date);
            setDate(`between ${start_date} and ${end_date}`);
        }
    }, [rideInfo])

    return (
        <section>
            <h2>Information about the ride</h2>

            <div>To {rideInfo.location}</div>
            <Edit param={'location'} paramType={'text'} paramValue={rideInfo.location}/>

            <div>{date}.</div>
            <Edit param={'date'} paramType={'date'} paramValue={[rideInfo.start_date, rideInfo.end_date]}/>

            {rideInfo.has_car ? <div>I have a car.</div> 
                                : <div>I don't have a car</div>}
            <Edit param={'has_car'} paramType={'checkbox'} paramValue={false}/>

            {rideInfo.wants_car ? <div>I am looking for someone who has a car.</div> 
                                : <div>I am not looking for someone who has a car.</div>}
            <Edit param={'wants_car'} paramType={'checkbox'} paramValue={false}/>

            {rideInfo.wants_uber ? <div>I want to split an Uber.</div> 
                                    : <div>I don't want to split an Uber.</div>}
            <Edit param={'wants_uber'} paramType={'checkbox'} paramValue={false}/>

            <div>{rideInfo.additional_comments}</div>
            <Edit param={'additional_comments'} paramType={'text'} paramValue={rideInfo.additional_comments}/>
        </section>

    )
}

export default EditableRideInfo;