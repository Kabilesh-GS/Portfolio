import React from 'react';
import BottomBtn from '../Components/BottomBtn';
import ContactStyle from './Contact.module.css';
import ContactDetails from '../Components/ContactDetails';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';
import x from '../assets/twitter.svg';
import Footer from '../Components/Footer';
import instagram from '../assets/instagram.svg';

function Contact() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',flexDirection: 'column', gap: '15px'}}>
        <div className={ContactStyle.subcontain}>
          <div className={ContactStyle.bordercontain1}><a href='https://www.linkedin.com/in/kabileshgs/' target='_blank'><ContactDetails username='Kabilesh GS' logo={linkedin} /></a></div>
          <div className={ContactStyle.bordercontain2}><a href='https://github.com/Kabilesh-GS' target='_blank'><ContactDetails username='Kabilesh-GS' logo={github} /></a></div>
        </div>
        <div className={ContactStyle.subcontain}>
          <div className={ContactStyle.bordercontain3}><a href='mailto:kabileshgs@gmail.com' target='_blank'><ContactDetails username='kabileshgs@gmail.com' logo={gmail} /></a></div>
          <div className={ContactStyle.bordercontain4}><a target='_blank' href='https://medium.com/@kabileshgs'><ContactDetails username='Kabilesh GS' logo={medium} /></a></div>
        </div>
        <div className={ContactStyle.subcontain}>
          <div className={ContactStyle.bordercontain5}><a href='https://www.instagram.com/kabil.1507?igsh=MTNjaGhhdDZscjJwOA==' target='_blank'><ContactDetails username='@kabil.1507' logo={instagram} /></a></div>
          <div className={ContactStyle.bordercontain6}><a href='https://x.com/Kabi0704?s=09' target='_blank'><ContactDetails username='@kabi0704' logo={x} /></a></div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact;