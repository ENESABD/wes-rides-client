import React from 'react';

function LogOut({ setIsAuthenticated }) {

  const handleLogOut = () => {
    localStorage.removeItem("jw_token");
    setIsAuthenticated(false);
  }

  return (
    <button onClick={handleLogOut}>Log out</button>
  )
}

export default LogOut;