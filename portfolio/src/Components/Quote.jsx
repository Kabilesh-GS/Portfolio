import React, { useState, useEffect, useCallback } from 'react';
import Quotestyle from './Quote.module.css';

const names = [
  'Better three hours too soon than a minute too late.', 'Time will not slow down when something unpleasant lies ahead.', 'The past always looks better than it was. It’s only pleasant because it isn’t here.', 'It’s never too late to do something.', 'Your time is limited, so don’t waste it living someone else’s life.', 'Be yourself; everyone else is already taken.', 'You only live once, but if you do it right, once is enough.', "You miss 100% of the shots you don't take.", "It does not matter how slowly you go as long as you don't stop."
]
console.log(names.length);
function Quote() {

    const [newName, setnewName] = useState(names[1]);
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 10000);
        return () => clearInterval(intervalID);
    }, [shuffle])

  return (
    <div className={Quotestyle.container}>
        <center className={Quotestyle.quote}>{newName}</center>
    </div>
  )
} 

export default Quote