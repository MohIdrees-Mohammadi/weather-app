import React from 'react'

const weatherDetail = [
    {
        id: 1,
        icon: cloudy,
        temp: "20° ",
        time: "6:00 AM"
    },
    {
        id: 2,
        icon: cloudy,
        temp: "20°",
        time: "9:00 AM"
    },
    {
        id: 3,
        icon: cloudy,
        temp: "21°",
        time: "12:00 PM"
    }
    , {
        id: 4,
        icon: sun,
        temp: "20°",
        time: "3:00 PM"

    },
    {
        id: 5,
        icon: cloud,
        temp: "18°",
        time: "6:00 PM"

    },
    {
        id: 6,
        icon: cloud,
        temp: "18°",
        time: "9:00 PM"

    }
]
const TodayShortForcast = () => {
  return (
<div className='mt-3 flex w-full min-w-0 flex-col gap-3 rounded-4xl bg-secondary p-4 xl:p-5'>
                        <h5 className='text-sm font-medium tracking-wide text-gray-500'>TODAY'S FORECAST</h5>

                        <div className='grid min-w-0 grid-cols-3 items-center gap-3'>
                            {weatherDetail.map((item) => (
                                <div key={item.id} className='grid min-w-0 items-center gap-3 border-r border-r-gray-700 px-3 text-center last:border-r-0'>
                                    <p className='text-xs font-semibold'>{item.time}</p>
                                    <img src={item.icon} alt="icons" className="w-20 h-20 object-contain mx-auto" />
                                    <h2 className='font-bold'>{item.temp}</h2>
                                </div>
                            ))}
                        </div>

                    </div>  )
}

export default TodayShortForcast
