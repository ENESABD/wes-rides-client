import React from 'react';
import { Link } from 'react-router-dom';
import NewRideForm from '../components/NewRideComponents/NewRideForm';

function NewRide() {
  return (
    <div>
      <NewRideForm/>
      <br/>
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default NewRide;