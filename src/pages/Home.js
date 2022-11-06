import React from 'react';
import { Link } from 'react-router-dom';
import Rides from '../components/HomeComponents/Rides';

function Home() {
    return (
        <main className='p-2'>
            <Link to="/new-ride" className='btn btn-primary my-3'>Post a ride!</Link>
            <Rides/>
        </main>
    )
}

export default Home;