import React from 'react';
import Locationstyle from './Location.module.css';

function Location() {
  return (
    <div className={`${Locationstyle.contain}`}>
        <div style={{marginLeft: '25px', marginRight: '25px'}} className={`${Locationstyle.flex} ${Locationstyle.margintop20px} ${Locationstyle.white} ${Locationstyle.robotoflex} ${Locationstyle.justifybtwn} ${Locationstyle.fontsize}`}>
            <p className={Locationstyle.light}>Based in : </p>
            <p className={Locationstyle.bold}>Coimbatore</p>
        </div>
        <div className={Locationstyle.mapcontain}>
          <iframe className={Locationstyle.map} frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kpr%20institute,%20coimbatore+(My%20Business%20Name)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    </div>
  )
}

export default Location   