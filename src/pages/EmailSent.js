import React from 'react';
import { Link } from 'react-router-dom';

function EmailSent() {
  return (
    <main className='p-2'>
      <div>A link has been emailed.</div>
      <Link to="/login" className='btn btn-outline-secondary mt-3'>Login</Link>
    </main>
  )
}

export default EmailSent;