import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  const [temp, setTemp] = React.useState(null);
  const [city, setCity] = React.useState(null);
  
  
  
  const getWeather =  async () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=e98b2575eec19db0cf6d6917d0618239&units=metric"

    const res = await axios.get(url)
    console.log(res.data)
    setTemp(res.data.main.temp)
    setCity(res.data.name)


  }





  return (
    <section >
      <h1>Weather</h1>
      <h1>{Math.round(temp)}°C</h1>
      <h3>{city}</h3>
      <button onClick={getWeather} className='px-2 py-1 border cursor-pointer'>Get Req</button>

    </section>
  )
}

export default HomePage