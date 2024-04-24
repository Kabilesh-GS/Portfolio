import React from 'react';
import Quotestyle from './Quote.module.css';

function Quote() {
  return (
    <div className={Quotestyle.container}>
        <p className={Quotestyle.quote}>Better three hours too soon than a minute too late.</p>
    </div>
  )
} 

export default Quote