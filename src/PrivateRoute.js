import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ isAllowed, children }) {

    if (!isAllowed) {
        return <Navigate to='/' />
    }

    //children ? children : <Outlet/>

    return (
        <Outlet/>
    )
}

export default PrivateRoute;