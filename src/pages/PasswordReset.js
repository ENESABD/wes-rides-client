import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../components/CommonComponents/ErrorMessage';
import Loading from '../components/CommonComponents/Loading';
import PasswordResetForm from '../components/PasswordResetComponents/PasswordResetForm';
import useVerify from '../hooks/useVerify';

function PasswordReset() {
  const { jwt } = useParams();

  const [isValid] = useVerify(jwt);

  console.log(isValid);

  if (isValid === undefined) {
      return <Loading loading={true} />
  }

  return (
    <main className='p-2'>
      {!isValid ? <ErrorMessage error={'Invalid link'}/> : 
      <>
        <PasswordResetForm jwt={jwt} />
        <p>If your password is successfully changed, you will be redirected to the login page.</p>
      </>}
    </main>
  )
}

export default PasswordReset;