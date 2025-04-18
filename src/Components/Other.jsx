import langstyle from './Frontend.module.css'

export default function Other(props) {
  return (
    <div className={langstyle.container}>
      <div style={{display: "flex",justifyContent:"center",alignItems:"center",flexDirection: "column"}}>
        <div style={{display: "flex",gap:"20px",paddingTop:"30px",paddingBottom:"15px"}} className={langstyle.logocont}>
          <img src={props.logo1}/>
          <img src={props.logo2}/>
          <img src={props.logo3}/>
          <img src={props.logo4}/>
        </div>
        <h2 className={langstyle.title}>Other tools</h2>
      </div>
    </div>
  )
}
