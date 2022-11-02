import React from 'react';
import { useParams } from 'react-router-dom';
import PasswordResetForm from '../components/PasswordResetComponents/PasswordResetForm';
import useVerify from '../hooks/useVerify';

function PasswordReset() {
  const { jwt } = useParams();

  const [isValid] = useVerify(jwt);

  console.log(isValid);

  if (isValid === undefined) {
      return <h1>Loading...</h1>
  }

  return (
    <div>
      {!isValid ? <p>Invalid Link</p> : 
      <>
        <PasswordResetForm jwt={jwt} />
        <p>If your password is successfully changed, you will be redirected to the login page.</p>
      </>}
    </div>
  )
}

export default PasswordReset;