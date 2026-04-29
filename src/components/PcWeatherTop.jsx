import React from 'react'
import sunny from "../assets/sunny.png";



 const weatherConditionCode = {
        "01d": sunny,
        
        
      }



const PcWeatherTop = ({ weatherData }) => {
    return (
        <section className='flex flex-col w-full lg:mx-auto lg:flex-row lg:justify-between lg:h-full lg:min-h-0 items-center  lg:w-full '>
            <div className='flex flex-col items-center justify-center  gap-9   lg:ml-2.5 lg:items-start lg:justify-evenly h-full'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-5xl'>{weatherData && weatherData.name}</h1>
                    <span className='text-xs sm:text-sm lg:text-sm xl:text-base text-gray-400 ml-1'>Humidity: {weatherData && weatherData.main.humidity}%</span>
                </div>
                <span className='text-5xl lg:text-4xl xl:text-5xl hidden lg:block font-extrabold '>{weatherData && Math.round(weatherData.main.temp)}°</span>
            </div>
            <img src={weatherData && weatherConditionCode[weatherData.weather[0].icon]} alt='weather image' className=' lg:w-[25%] lg:h-full lg:max-h-full lg:object-contain h-55 ' />
            <span className='text-5xl sm:text-6xl lg:hidden font-extrabold font-mono'>{weatherData && weatherData.main.temp}°</span>
        </section>


    )
}

export default PcWeatherTop
