import React from 'react';
import { Link } from 'react-router-dom';

function EmailSent() {
  return (
    <div>
      <div>The email has been sent.</div>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default EmailSent;