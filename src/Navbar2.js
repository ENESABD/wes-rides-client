import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar2() {
    return (
      <div>
            <NavLink to="/">Wesrides</NavLink>
            <br/>
            <br/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/my-rides">My Rides</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    )
}

export default Navbar2;