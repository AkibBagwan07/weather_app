import {React,useState,useEffect} from 'react'
import styles from "./homepage.module.css"
import logo from "../assests/logo.svg"
import axios from 'axios'
import WeatherChart from '../weatherChart/weatherChart'

const HomePage = () => {
    const [search,setSearch] = useState("")
    const [data, setData] = useState()
    const [seeData, setSeeData] = useState(null)

    const handleChange = () => { 
        setTimeout(() => {   
         setSeeData(!seeData)
        },500)
    }
   // console.log(data)
    useEffect(() => { 
        (async () => { 
            try {
                const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=34dd105e2c4c4cf2b69154421240903&q=${search}&days=7`)
               // console.log(data.data)
                setData(data.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [search])
    
    return (
        <div>{!seeData ?
            <div className={styles.hero}>
                <div>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={styles.layout}>
                    <h1 className={styles.name}>Weather App</h1>
                    <form className={styles.homeChart} onSubmit={(e) => {
                        e.preventDefault()
                        setSearch(e.target.search.value)
                    }} >
                        <input required className={styles.inp} defaultValue={search} name='search' type="text" />
                        <button onClick={handleChange} className={styles.searchBtn} type='submit'>Search</button>
                    </form>
                    <p className={styles.quote}>"Explore the Weather In your <span className={styles.changeWordCol}>City</span>"</p>
                </div>
            </div> : data ? <WeatherChart data={ data} /> : <HomePage/>}
          </div>
    )    
}

export default HomePage