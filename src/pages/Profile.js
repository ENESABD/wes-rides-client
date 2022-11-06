import React from 'react';
import ErrorMessage from '../components/CommonComponents/ErrorMessage';
import Loading from '../components/CommonComponents/Loading';
import LogOut from '../components/ProfileComponents/LogOut';
import ProfileDetails from '../components/ProfileComponents/ProfileDetails';
import useAxios from '../hooks/useAxios';

function Profile({ setIsAuthenticated }) {

  const [userData, error, isLoading] = useAxios('GET', '/user');

  return (
    <main className='p-2'>
      {error ? <ErrorMessage error={'You are not logged in (or there is some other problem)!'}/> :
      isLoading ? <Loading loading={true}/> : 
      <ProfileDetails editable={true} userData={userData}/>}
      <LogOut setIsAuthenticated={setIsAuthenticated} />
    </main>
  )
}

export default Profile;