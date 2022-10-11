import React from 'react';
import PasswordResetForm from '../components/PasswordResetComponents/PasswordResetForm';

function PasswordReset() {
  return (
    <div>
      <PasswordResetForm/>
      <p>If your password is successfully changed, you will be redirected to the login page.</p>
    </div>
  )
}

export default PasswordReset;