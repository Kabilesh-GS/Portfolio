import React from 'react';
import DetailStyle from './ContactDetails.module.css';

function ContactDetails(props) {
  return (
    <div className={DetailStyle.container}>
      <div className={DetailStyle.innercontainer}>
        <p className={DetailStyle.username}>{props.username}</p>
        <img className={DetailStyle.styleimage} src={props.logo} />
      </div>
    </div>
  )
}

export default ContactDetails;