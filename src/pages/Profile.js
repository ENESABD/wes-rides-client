import React from 'react';
import LogOut from '../components/ProfileComponents/LogOut';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';
import useAxios from '../hooks/AxiosAbstraction/useAxios';

function Profile({ setIsAuthenticated }) {

  const [userData, error, isLoading] = useAxios('GET', '/user');

  return (
    <div>
      {error ? <p>There is some problem</p> :
      isLoading ? <p>Loading...</p> : 
      <ProfileDetails editable={true} userData={userData}/>}
      <LogOut setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}

export default Profile;