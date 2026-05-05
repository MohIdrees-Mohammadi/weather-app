import React from 'react'
import sun from "../assets/sunny.png"
import sunny from "../assets/sunny.png";

// icon codes

// import clearSky from "../assets/icon codes/0_Clear Sky.png";
// import mainlyClear from "../assets/icon codes/1 Mainly Clear.png";
// import partlyCloudy from "../assets/icon codes/2 Partly Cloudy.png";
// import overcast from "../assets/icon codes/3 Overcast.png";
// import fog from "../assets/icon codes/45 fog.png";
// import drizzle from "../assets/icon codes/51 Freezing Drizzle.png";
// import rain from "../assets/icon codes/61 Rain.png";
// import freezingRain from "../assets/icon codes/66 Freezing Rain.png";
// import snowFall from "../assets/icon codes/71 Snow Fall.png";
// import snowGrains from "../assets/icon codes/77 Snow grains.png";
// import rainShowers from "../assets/icon codes/80 Rain Showers.png";
// import moderateRainShowers from "../assets/icon codes/81 moderate rain Showers.png";
// import snowShowers from "../assets/icon codes/85 Snow Showers.png";
// import thunderStorm from "../assets/icon codes/95 ThuderStorm.png";
// import thunderStormWithHail from "../assets/icon codes/99 ThunderStrom with hail.png";


 const weatherConditionCode = {
        "01d": sunny,
        
      }



const PcWeatherTop = ({ weatherData }) => {
    return (
        <section className='flex flex-col lg:mx-auto lg:flex-row lg:justify-between lg:pr-10 lg:h-[34%] items-center lg:w-[96%] '>
            <div className='flex flex-col items-center justify-center gap-9  lg:ml-2.5 lg:items-start lg:justify-evenly h-full'>
                <div className='flex flex-col lg:items-start items-center justify-center lg:gap-2 xl:gap-3 '>
                    <h1 className='font-bold text-3xl lg:text-3xl xl:text-4xl'>{weatherData && weatherData.name}</h1>
                    <span className='text-gray-400 ml-1 '>humidity: {weatherData && weatherData.main.humidity}</span>
                </div>
                <span className='text-5xl lg:text-4xl xl:text-5xl hidden lg:block font-extrabold '>{weatherData && Math.round(weatherData.main.temp)}°</span>
            </div>
            <img src={weatherData && weatherConditionCode[weatherData.weather[0].icon]} alt='weather image' className=' lg:w-[24%] lg:h-auto h-55 ' />
            <span className='text-5xl lg:hidden font-extrabold font-mono'>{weatherData && weatherData.main.temp}°</span>
        </section>




    )
}

export default PcWeatherTop
