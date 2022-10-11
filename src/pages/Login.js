import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginComponents/LoginForm';

function Login() {
  return (
    <div>
      <LoginForm/>
      <br/>
      <Link to="/forgot-password">Forgot password?</Link>
      <Link to="/sign-up">Don't have an account?</Link>
    </div>
  )
}

export default Login;