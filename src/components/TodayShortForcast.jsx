import React from 'react'
import cloudy from '../assets/cloudy.png'
import sun from "../assets/sunny.png"
import cloud from '../assets/cloud.png'
import { weatherData } from '../utils/Data'

const TodayShortForcast = () => {
    return (
        <div className='mt-3 hidden lg:flex  lg:w-full min-w-0 flex-col gap-3 rounded-4xl bg-secondary p-4 xl:p-5'>
            <h5 className='text-sm font-medium tracking-wide text-gray-500'>TODAY'S FORECAST</h5>

            <div className='grid min-w-0 grid-cols-3 items-center gap-3'>
                {weatherData.map((item) => (
                    <div key={item.id} className='grid min-w-0 items-center gap-3 border-r border-r-gray-700 px-3 text-center last:border-r-0'>
                        <p className='text-xs font-semibold'>{item.time}</p>
                        <img src={item.icon} alt="icons" className="w-20 h-20 object-contain mx-auto" />
                        <h2 className='font-bold'>{item.temp}</h2>
                    </div>
                ))}
            </div>

        </div>)
}

export default TodayShortForcast
