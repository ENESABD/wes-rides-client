import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginComponents/LoginForm';

function Login({ setIsAuthenticated }) {
    return (
        <main className='p-2'>
            <LoginForm setIsAuthenticated={setIsAuthenticated}/>
            
            <Link to="/forgot-password" className='btn btn-outline-secondary mt-3'>Forgot password?</Link>
            <br/>
            <Link to="/sign-up" className='btn btn-outline-secondary mt-3'>Don't have an account?</Link>
            
        </main>
    )
}

export default Login;