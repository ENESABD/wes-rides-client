import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpComponents/SignUpForm';

function SignUp() {
    return (
        <main className='p-2'>
            <SignUpForm/>
            <Link to="/login" className='btn btn-outline-secondary mt-3'>Already have an account?</Link>
        </main>
    )
}

export default SignUp;