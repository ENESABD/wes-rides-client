import React from 'react';
import { Link } from 'react-router-dom';
import NewRideForm from '../components/NewRideComponents/NewRideForm';

function NewRide() {
    return (
        <main className='p-2'>
            <NewRideForm/>
            <Link to={'/my-rides'} className='btn btn-outline-secondary mt-3'>Go to my rides</Link>
        </main>
    )
}

export default NewRide;