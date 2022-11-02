import React from 'react';
import InputItem from './InputItem';
import inputObjects from '../../inputs.json';

function ChooseDate({ values, prevValues, handleChange }) {
    return (
    <>
        <label htmlFor="date_type">Please choose one of the options:<span aria-label="required">*</span></label>
        <br/>
        <br/>
        
        <label htmlFor="interval">
            I am flexible within a time interval.
        </label>
        <input id="interval" type="radio" name="date_type" value="interval" 
            checked={values.date_type === "interval"} required={true} onChange={handleChange}/>

        <br/>
        <br/>

        <label htmlFor="exact">
            I have an exact date in mind.
        </label>
        <input id="exact" type="radio" name="date_type" value="exact" 
            checked={values.date_type === "exact"} required={true} onChange={handleChange}/>

        <br/>
        <br/>

        {values.date_type === "interval" &&
        <>
            <InputItem  //placeholder="yyyy-mm-dd"
                inputObject={inputObjects.start_date}
                value={values.start_date}
                prevValue={prevValues?.start_date.substring(0,10) || values.exact_date}
                handleChange={handleChange}
            />
            <InputItem 
                inputObject={inputObjects.end_date}
                value={values.end_date}
                prevValue={prevValues?.end_date.substring(0,10) || values.exact_date}
                handleChange={handleChange}
            />
        </>}

        {values.date_type === "exact" && 
            <InputItem 
                inputObject={inputObjects.exact_date}
                value={values.exact_date}
                prevValue={prevValues?.start_date.substring(0,10) || values.start_date}
                handleChange={handleChange}
            />
        }

    </>
    )
}

export default ChooseDate;