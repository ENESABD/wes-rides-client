import React from 'react';
import { Link } from 'react-router-dom';
import ResetRequestForm from '../components/ForgotPasswordComponents/ResetRequestForm';

function ForgotPassword() {
  return (
    <div>
      <ResetRequestForm/>
      <br/>
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default ForgotPassword;