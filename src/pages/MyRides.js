import React, { useState } from 'react';
import RideList from '../components/AcrossPagesComponents/RideList';

function MyRides() {

  const [rides, setRides] = useState([
    {id: 1, location: "Boston", start_date: "10-09-2022", end_date: "10-09-2022", status: "awaiting_confirmation"},
    {id: 2, location: "Foston", start_date: "11-09-2022", end_date: "15-09-2022", status: "awaiting_confirmation"}
  ]);

  return (
    <div>
      <h2>My Postings</h2>
      <RideList rides={rides}/>
      <br/>
      <h2>My Requests</h2>
      <RideList rides={rides}/>
    </div>
  )
}

export default MyRides;