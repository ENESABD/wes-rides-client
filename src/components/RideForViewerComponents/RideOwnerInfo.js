import React from 'react';

function RideOwnerInfo({ rideInfo }) {
    return (
        <section>
            <h2>Information about the user who posted the ride</h2>
            <div>Name: {rideInfo.user_name}</div>
            <div>Email: {rideInfo.user_email}</div>
            {rideInfo.phone_number ? <div>Phone number: {rideInfo.phone_number}</div> : null}
            {rideInfo.user_snapchat ? <div>Snapchat: {rideInfo.user_snapchat}</div> : null}
            {rideInfo.user_instagram ? <div>Instagram: {rideInfo.user_instagram}</div> : null}
            {rideInfo.user_facebook ? <div>Facebook: {rideInfo.user_facebook}</div> : null}
        </section>
    )
}

export default RideOwnerInfo;