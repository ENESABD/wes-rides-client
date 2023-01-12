import React, { useEffect, useState } from 'react';
import Edit from '../CommonComponents/Edit';
import inputObjects from '../../inputs.json';
import { passwordConfirmationCheck } from '../../commonFunctions';

function ProfileDetails({ editable, userData, onlyContactInfo }) {

    const noChangeWithSideEffect = ({values}) => {
        const value_key = Object.keys(values)[0];
        if (value_key) {
            setCurrentUserData((prevUserData => ({...prevUserData, [inputObjects[value_key].value_label]: values[value_key]})))
        }
        return values;
    }  

    const [currentUserData, setCurrentUserData] = useState({});
    
    useEffect(() => {
        setCurrentUserData(userData);
    }, [userData])
    
    const rows = onlyContactInfo ? ['phone', 'snapchat', 'instagram', 'facebook']
                : ['name', 'phone', 'snapchat', 'instagram', 'facebook'];

    return (
        <>
            <ul style={{listStyle: 'none'}} className='list-group my-4'>
                <li className='list-group-item'><b>Email</b>: {currentUserData?.user_email}</li>
                {rows.map((row) => {
                    let inputObject = inputObjects[row];
                    let label = inputObject.label;
                    let current_value = currentUserData?.[inputObject.value_label];
                
                    return <li key={label} className='list-group-item'>
                        <div><b>{label}</b>: {current_value || 'Not provided'}</div>
                        {editable && 
                        <Edit 
                            inputObject={inputObject}
                            prevValue={current_value}  
                            formType={'single-input'} 
                            requestUrl={'/user'}
                            formattingFunction={noChangeWithSideEffect}
                        />}
                    </li>
                })}
                {editable && 
                <li className='list-group-item'>
                    <Edit
                        formType={'password-update'} 
                        requestUrl={'/user/password-update'}
                        formattingFunction={passwordConfirmationCheck}
                    />
                </li>}
            </ul>
        </>
    )
}

export default ProfileDetails;