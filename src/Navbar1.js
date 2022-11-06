import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar1() {
    return (
        
        <nav className='navbar navbar-dark bg-dark'>  
            
            <NavLink to="/" className="navbar-brand mx-2">WesRides</NavLink>         
  
            <div className='nav'>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/login" className="nav-link">Login</NavLink>
                <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
            </div>
        </nav>
        
    )
}

export default Navbar1;