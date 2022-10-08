import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar1() {
    return (
        <div>
            <NavLink to="/">Wesrides</NavLink>
            <br/>
            <br/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
        
    )
}

export default Navbar1;