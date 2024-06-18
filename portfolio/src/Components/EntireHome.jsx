import React from 'react';
import Style from './EntireHome.module.css';
import Location from './Location';
import Home from './Home';
import Homeimage from './Homeimage';

function EntireHome() {
  return (
      <div className={Style.home}>
          <div className={Style.hometextcontainer}>
            <Home />
            <div className={Style.hometextcontainersub}>
              <Location />
            </div>
          </div>
          <Homeimage />
      </div>
  )
}

export default EntireHome;