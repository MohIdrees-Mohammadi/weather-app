import React from 'react'
const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'
import TodayShortForcast from "../components/TodayShortForcast"
import cloud from '../assets/cloud.png'
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
    icon: cloud,
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

const Sevenforecast = ({ toggle, setToggle }) => {
  console.log(toggle);
  return (
    <>
      {
        toggle ? (<div className='bg-secondary lg:h-full  w-[93vw] lg:w-[99%] lg:px-[8%] lg:py-[5%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 gap-2.5'>
          <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
          <div className='grid grid-rows-7 h-full'>
            {
              prediction.map(({ day, icon, temp, weather }) => {
                return (
                  <div key={day} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                    <span>{day}</span>
                    <div className='flex gap-3 items-center justify-center'>
                      <img src={icon} alt='weather image' className='w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[45%] lg:h-auto fill-yellow-300' />
                      <span className='font-bold'>{weather}</span>
                    </div>
                    <span className='text-right'>{temp}</span>
                  </div>
                )
              })
            }
          </div>

        </div>) : (
          <>
            <TodayShortForcast />
            <div className='flex px-[8%] pt-[8%] w-full flex-col md:pt-[4%] md:h-170 rounded-2xl bg-secondary p-2 text-gray-400 h-150'>
            <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
            <div className='grid flex-1 grid-rows-7'>
              {
                prediction.map(({ day, icon, temp, weather }) => {
                  return (
                    <div key={day} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                      <span>{day}</span>
                      <div className='flex gap-3 items-center justify-center'>
                        <img src={icon} alt='weather image' className='w-[45%] h-auto md:h-auto md:w-[30%] lg:w-[45%] lg:h-auto fill-yellow-300' />
                        <span className='font-bold'>{weather}</span>
                      </div>
                      <span className='text-right'>{temp}</span>
                    </div>
                  )
                })
              }
            </div>

          </div>
            </>
        )
      }
    </>
  )
}

export default Sevenforecast
