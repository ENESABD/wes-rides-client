import React from 'react';
import { captureRideTags, formatRideDates } from '../../commonFunctions';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import InputItem from '../CommonComponents/InputItem';
import inputObjects from '../../inputs.json';
import ChooseDate from '../CommonComponents/ChooseDate';
import ChooseTags from '../CommonComponents/ChooseTags';
import { Navigate } from 'react-router-dom';

function NewRideForm() {
    const newRideChecks = ({ values, event }) => {
        let capturedTags = captureRideTags({event}); 
        if (typeof(capturedTags) === "string") {
            return capturedTags;
        }
        let formattedDates = formatRideDates({event});
        if (typeof(formattedDates) === "string") {
            return formattedDates;
        }
        return {...values, ...formattedDates, ...capturedTags};
    }
    
    const [values, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('POST', '/rides', newRideChecks);
    
    return (
        <>
            {response?.ride_id ? <Navigate to={`/ride/${response.ride_id}`}/> : 
            <form onSubmit={handleSubmit}>
                <h1>New Ride Form</h1>
                <h2>Instructions</h2>
                <ul>
                    <li>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</li>
                    <li>Location can only contain letters, numbers, spaces, or commas,
                        and must be limited to 50 characters.</li>
                    <li>At least one filter must be true.</li>
                    <li>Additional comments must be limited to 1500 characters.</li>
                </ul>
                
                <InputItem 
                    inputObject={inputObjects.location}
                    value={values.location}
                    handleChange={handleChange}
                    />
                <br/>

                <ChooseDate values={values} handleChange={handleChange} />

                <br/>
                <br/>

                <ChooseTags isDisabled={false}/>
            
                <br/>
                <br/>

                <InputItem 
                    inputObject={inputObjects.additional_comments}
                    value={values.additional_comments}
                    handleChange={handleChange}
                    />
                <br/>

                {errorMessage ? <p>{errorMessage}<br/></p> : null}
                {requestInProcess ? <p>Loading...<br/></p> : null}

                <button type="submit">Submit</button>
            </form> }
        </>
    )
}

export default NewRideForm;