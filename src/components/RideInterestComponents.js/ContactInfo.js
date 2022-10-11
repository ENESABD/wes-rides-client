import React from 'react';

function ContactInfo({ rideInterestInfo }) {
  return (
    <section>
      <h3>Contact Information</h3>
      <div>Email: {rideInterestInfo.user_email}</div>
      {rideInterestInfo.phone_number ? <div>Phone number: {rideInterestInfo.phone_number}</div> : null}
      {rideInterestInfo.user_snapchat ? <div>Snapchat: {rideInterestInfo.user_snapchat}</div> : null}
      {rideInterestInfo.user_instagram ? <div>Instagram: {rideInterestInfo.user_instagram}</div> : null}
      {rideInterestInfo.user_facebook ? <div>Facebook: {rideInterestInfo.user_facebook}</div> : null}
    </section>
  )
}

export default ContactInfo;