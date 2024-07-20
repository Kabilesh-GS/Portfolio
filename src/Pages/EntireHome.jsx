import React from 'react';
import Style from './EntireHome.module.css';
import Location from '../Components/Location';
import Home from '../Components/Home';
import Homeimage from '../Components/Homeimage';
import Blog from '../Components/Blog';

function EntireHome() {
  return (
      <>
        <div className={Style.home}>
            <div className={Style.hometextcontainer}>
              <Home />
              <div className={Style.hometextcontainersub}>
                <Location />
                <Blog />
              </div>
            </div>
            <Homeimage />
        </div>
      </>
  )
}

export default EntireHome;