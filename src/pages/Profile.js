import React from 'react';
import LogOut from '../components/ProfileComponents/LogOut';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';

function Profile() {
  return (
    <div>
      <ProfileDetails/>
      <LogOut/>
    </div>
  )
}

export default Profile;