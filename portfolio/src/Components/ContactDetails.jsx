import React from 'react';
import DetailStyle from './ContactDetails.module.css';

function ContactDetails(props) {
  return (
    <div className={DetailStyle.container}>
      <div className={DetailStyle.innercontainer}>
        <img className={DetailStyle.styleimage} src={props.logo} />
        <p>{props.username}</p>
      </div>
    </div>
  )
}

export default ContactDetails;