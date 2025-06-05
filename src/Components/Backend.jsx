import React from 'react'
import langstyle from './Frontend.module.css'

function Backend(props) {
  return (
    <div className={langstyle.container}>
      <div style={{display: "flex",justifyContent:"center",alignItems:"center",flexDirection: "column"}}>
        <div style={{display: "flex",gap:"20px",paddingTop:"30px",paddingBottom:"15px"}} className={langstyle.logocont}>
          <img src={props.logo1}/>
        </div>
        <h2 className={langstyle.title}>Backend</h2>
      </div>
    </div>
  )
}

export default Backend