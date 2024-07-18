import React from 'react';
import Btnstyle from './BottomBtn.module.css';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function BottomBtn(props) {
  return (
    <div className={Btnstyle.container}>
        <Link className={Btnstyle.link1} to={props.leftToLink}>
          <FaCircleArrowLeft className={Btnstyle.leftarr}/>
          <p>{props.leftCont}</p>
        </Link>
        <Link className={Btnstyle.link2} to={props.rightToLink}>
          <p>{props.rightCont}</p>
          <FaCircleArrowRight className={Btnstyle.rightarr}/>
        </Link>
    </div>
  )
}

export default BottomBtn;