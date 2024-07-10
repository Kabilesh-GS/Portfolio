import React from 'react';
import BottomBtn from './BottomBtn';
import ContactStyle from './Contact.module.css';
import ContactDetails from './ContactDetails';
import instagram from '../assets/Instagram.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import linkedin from '../assets/linkedin.png';

function Contact() {
  return (
    <>
      <ContactDetails username='kabil.1507' logo={linkedin}/>
      <ContactDetails username='kabil.1507' logo={github}/>
      <ContactDetails username='kabil.1507' logo={instagram}/>
      <ContactDetails username='kabil.1507' logo={medium}/>
      <ContactDetails username='kabil.1507' logo={medium}/>
      <ContactDetails username='kabil.1507' logo={medium}/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <BottomBtn leftCont="Projects" rightCont='Home' leftToLink="/projects" rightToLink="/" />
      </div>
    </>
  )
}

export default Contact;