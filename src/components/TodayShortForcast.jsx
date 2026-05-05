import React from 'react'
import TempCard from './tempCard'

const TodayShortForcast = ({ hourly, weatherCode }) => {
    const forecastItems = [
        { index: 6, time: "6:00 AM" },
        { index: 12, time: "12:00 PM" },
        { index: 18, time: "6:00 PM" },
    ]

    if (!hourly || !weatherCode) {
        return <div className='mt-3 lg:mt-0 hidden lg:flex lg:h-[32%] lg:w-full rounded-2xl bg-secondary p-4 text-gray-400'>loading</div>
    }

    return (
        <div className='mt-3 lg:mt-0 hidden lg:flex lg:h-[32%] lg:w-full  flex-col gap-1 lg:justify-between rounded-2xl bg-secondary p-4 lg:pl-[3%] lg:pt-[2.5%] lg:pb-[3%]'>
            <h5 className='lg:text-[12px] xl:text-md font-medium lg:h-[10%] text-gray-500'>TODAY'S FORECAST</h5>

            <div className='grid min-w-0 grid-cols-3 items-center lg:h-[83%]'>
                {forecastItems.map(({ index, time }) => (
                    <TempCard key={index} hourly={hourly[index]} time={time} icon={weatherCode[index]}/>
                ))}
            </div>

        </div>)
}

export default TodayShortForcast
