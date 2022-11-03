import React from 'react';
import { Link } from 'react-router-dom';
import ResetRequestForm from '../components/ForgotPasswordComponents/ResetRequestForm';

function ForgotPassword() {
  return (
    <div>
      <ResetRequestForm/>
      <br/>
      <Link to={'/login'}>Go to the login page</Link>
    </div>
  )
}

export default ForgotPassword;