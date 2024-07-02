import {React , useState } from 'react'
import styles from "./weatherChart.module.css"
import location from "../assests/map.svg"
import HomePage from '../homepage/homepage'
import logo from "../assests/logo.svg"

const WeatherChart = ({ data }) => {
  const [backToHome,setBackToHome] = useState(null)
 // console.log(data)
  // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const date = data.current.last_updated.split(' ')
  // console.log(date[0])
  const lastUpdatedtime = date[1]
  // const dateConst = new Date(date)
  // let day = weekday[dateConst.getDay()];
 // console.log(day)  
  
  const handleChange = () => { 
    setBackToHome(!backToHome)
  }
  return (<div>{!backToHome ?
    <div>
      <div className={styles.hero}></div>
      <div>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
      <div className={styles.DataLayoutRight}>
        <div className={styles.parts}>
          <p>Wind</p>
          <p>{data.current.wind_kph} kph</p>
        </div>
        <hr />
        <div className={styles.parts}>
          <p>Humidity</p>
          <p>{data.current.humidity}</p>
        </div>
        <hr />
        <div className={styles.parts}>
          <p>Temp</p>
          <p>{data.current.temp_c}°C</p>
        </div>
        <hr />
        <div className={styles.parts}>
          <p>Recent Weather update</p>
          <p>{ lastUpdatedtime} {lastUpdatedtime > 12 ? "Pm" : "Am"}</p>
        </div>
        <button onClick={handleChange} className={styles.changeLocationBtn}>
          <img src={location} alt="location" />Change Location</button>
      </div>
      <div className={styles.DataLayoutLeft}>
        <p className={ styles.countryAndRegion}>{data.location.country},{data.location.region}</p>
        <h1 className={ styles.name}>{data.location.name}</h1>
        <img src={data.current.condition.icon} alt="icon" />
        <p className={ styles.report}>{data.current.condition.text}</p>
        <div className={styles.daysBlocks}>
          {data.forecast.forecastday.map((ele) => {
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          
            const dateConst = new Date(ele.date)
            let day = weekday[dateConst.getDay()];
          //  console.log(day)
              return <div className={styles.daysCols}>
                <p className={ styles.weekDay}>{day}</p> 
                <img className={ styles.icon} src={ele.day.condition.icon} alt="icon" />
                <p className={styles.text}>{ ele.day.condition.text}</p>
             </div>
            })}
        </div>
      </div>
    </div> : <HomePage/>}
    </div>
  )
}

export default WeatherChart