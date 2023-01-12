import React from 'react';
import { Link } from 'react-router-dom';
import ResetRequestForm from '../components/ForgotPasswordComponents/ResetRequestForm';

function ForgotPassword() {
  return (
    <main className='p-2'>
      <ResetRequestForm/>
      <Link to={'/login'} className='btn btn-outline-secondary mt-3'>Go to the login page</Link>
    </main>
  )
}

export default ForgotPassword;