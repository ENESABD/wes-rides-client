import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>Welcome to WesRides!</h1>
            <br/>
            <Link to="/sign-up">I am new</Link>
            <Link to="/login">I already have an account</Link>
        </div>
    )
}

export default Landing;