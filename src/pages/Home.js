import React from 'react';
import { Link } from 'react-router-dom';
import Rides from '../components/HomeComponents/Rides';

function Home() {
    return (
        <div>
            <Link to="/new-ride">Post a ride!</Link>
            <Rides/>
        </div>
    )
}

export default Home;