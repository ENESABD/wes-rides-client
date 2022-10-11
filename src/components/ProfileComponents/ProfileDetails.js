import React, { useState } from 'react';
import Edit from '../AcrossPagesComponents/Edit';
import ChangePassword from './ChangePassword';

function ProfileDetails() {

    const [userInfo, setUserInfo] = useState({
        user_name: 'NS',
        user_email: 'ns@wes.edu',
        user_facebook: 'NS_Wes'
    });

    return (
        <div>
            <div>Name: {userInfo.user_name}</div>
            <Edit param={'user_name'} paramType={'text'} paramValue={userInfo.user_name}/>

            <div>Email: {userInfo.user_email}</div>
            <Edit param={'user_email'} paramType={'email'} paramValue={userInfo.user_email}/>

            <div>Phone number: {userInfo.phone_number ? userInfo.phone_number : 'Not provided'}</div>
            <Edit param={'phone_number'} paramType={'tel'} paramValue={userInfo.phone_number}/>

            <div>Snapchat: {userInfo.user_snapchat ? userInfo.user_snapchat : 'Not provided'}</div>
            <Edit param={'user_snapchat'} paramType={'text'} paramValue={userInfo.user_snapchat}/>

            <div>Instagram: {userInfo.user_instagram ? userInfo.user_instagram : 'Not provided'}</div>
            <Edit param={'user_instagram'} paramType={'text'} paramValue={userInfo.user_instagram}/>

            <div>Facebook: {userInfo.user_facebook ? userInfo.user_facebook : 'Not provided'}</div>
            <Edit param={'user_facebook'} paramType={'text'} paramValue={userInfo.user_facebook}/>

            <ChangePassword/>
        </div>
    )
}

export default ProfileDetails;