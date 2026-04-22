import React from 'react'
const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'

const prediction = [
  {
    day: "Saturday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Sunday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Monday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Tuesday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "wednesday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Tursday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Friday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },

]

const sevenforecast = () => {
    return (
        <section className='flex  lg:w-[32%]  '>
            <div className='ml-6  bg-secondary lg:my-auto lg:ml-0 text-gray-400 rounded-2xl hidden lg:h-[86.5vh] lg:w-full p-4 gap-2.5 lg:block'>
                <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
                <div className='grid grid-row-7 h-full'>
                    {
                        prediction.map((day, index) => {
                            return (
                                <div key={index} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                                    <span>{day.day}</span>
                                    <div className='flex gap-3 items-center justify-center'>
                                        <img src={day.icon} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                                        <span className='font-bold'>{day.weather}</span>
                                    </div>
                                    <span className='text-right'>{day.temp}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default sevenforecast