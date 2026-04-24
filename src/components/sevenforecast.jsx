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

const Sevenforecast = () => {
    return (
        <section className='hidden min-w-0 lg:flex lg:h-full lg:w-1/3'>
            <div className='flex h-full w-full flex-col rounded-2xl bg-secondary p-4 text-gray-400'>
                <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
                <div className='grid flex-1 grid-rows-7'>
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

export default Sevenforecast
