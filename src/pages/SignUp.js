import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpComponents/SignUpForm';

function SignUp() {
    return (
        <div>
            <SignUpForm/>
            <br/>
            <Link to="/login">Already have an account?</Link>
        </div>
    )
}

export default SignUp;