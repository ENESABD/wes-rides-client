import React from 'react';

function ErrorMessage({ error }) {
  return (
    <>
      {error ? <p className='alert alert-danger'>{error}</p> : null}
    </>
  )
}

export default ErrorMessage;