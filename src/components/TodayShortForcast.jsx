import React from 'react'
import { weatherData } from '../utils/Data'

const TodayShortForcast = () => {
    return (
        <div className='mt-3 lg:mt-0 hidden lg:flex lg:h-full lg:min-h-0 lg:w-full flex-col gap-1 lg:justify-between rounded-2xl bg-secondary p-4 lg:pl-[3%] lg:pt-[2.5%] lg:pb-[3%]'>
            <h5 className='text-xs lg:text-[12px] xl:text-base font-medium lg:h-[10%] text-gray-500'>TODAY'S FORECAST</h5>

            <div className='grid min-w-0 grid-cols-3 items-center  lg:h-[83%]'>
                {weatherData.map((item) => (
                    <div key={item.id} className='lg:flex lg:h-full lg:flex-col items-center lg:justify-between border-r border-r-gray-700 px-3 text-center last:border-r-0'>
                        <p className='text-[11px] xl:text-xs font-semibold'>{item.time}</p>
                        <img src={item.icon} alt="icons" className="lg:h-auto lg:w-[55%] object-contain mx-auto" />
                        <h2 className='text-sm xl:text-base font-bold'>{item.temp}</h2>
                    </div>
                ))}
            </div>

        </div>)
}

export default TodayShortForcast
