import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <main className='container text-center p-2'>
            <h1 className='p-5'>Welcome to WesRides!</h1>
            <div className='row justify-content-center align-items-center p-3'>
                <Link to="/sign-up" className='col-4 btn btn-primary m-3 fs-2-sm'>I am new</Link>
                <Link to="/login" className='col-4 btn btn-primary m-3'>I already have an account</Link>
            </div>
        </main>
    )
}

export default Landing;