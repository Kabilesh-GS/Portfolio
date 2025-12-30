import React from 'react';
import Locationstyle from './Location.module.css';

function Location() {
  return (
    <div className={`${Locationstyle.contain}`}>
      <div className={`${Locationstyle.homecontain}`}>
        <div style={{marginLeft: '25px', marginRight: '25px'}} className={`${Locationstyle.flex} ${Locationstyle.margintop20px} ${Locationstyle.white} ${Locationstyle.robotoflex} ${Locationstyle.justifybtwn} ${Locationstyle.fontsize}`}>
            <p className={Locationstyle.light}>Based in : </p>
            <p className={Locationstyle.bold}>Coimbatore</p>
        </div>
        <div className={Locationstyle.mapcontain}>
          <iframe className={Locationstyle.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4717105556338!2d76.99715777516451!3d11.078178553555118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b85f7723e71%3A0xb76066edf95ed596!2sWhizlabs!5e0!3m2!1sen!2sin!4v1767114463046!5m2!1sen!2sin"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location   