import React from 'react'
import sun from "../assets/sunny.png"

import sunny from "../assets/sunny.png";



 const weatherConditionCode = {
        "01d": sunny,
        
      }



const PcWeatherTop = ({ weatherData }) => {
    return (
        <section className='flex flex-col lg:mx-auto lg:flex-row lg:justify-between lg:pr-10 lg:h-[34%] items-center lg:w-[96%] '>
            <div className='flex flex-col items-center justify-center gap-9  lg:ml-2.5 lg:items-start lg:justify-evenly h-full'>
                <div className='flex flex-col lg:items-start items-center justify-center lg:gap-2 xl:gap-3 '>
                    <h1 className='font-bold text-3xl lg:text-2xl xl:text-3xl'>{weatherData && weatherData.name}</h1>
                    <span className='text-gray-400 ml-1 '>humidity: {weatherData && weatherData.main.humidity}</span>
                </div>
                <span className='text-5xl lg:text-2xl xl:text-3xl hidden lg:block font-extrabold '>{weatherData && Math.round(weatherData.main.temp)}°</span>
            </div>
            <img src={weatherData && weatherConditionCode[weatherData.weather[0].icon]} alt='weather image' className=' lg:w-[24%] lg:h-auto h-55 ' />
            <span className='text-5xl lg:hidden font-extrabold font-mono'>{weatherData && weatherData.main.temp}°</span>
        </section>


    )
}

export default PcWeatherTop
