import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar2() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <NavLink to="/" className="navbar-brand mx-2">WesRides</NavLink>
            
            <div className='nav'>
                <NavLink to="/" className="nav-link">Home</NavLink>            
                <NavLink to="/my-rides" className="nav-link">My Rides</NavLink>
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar2;