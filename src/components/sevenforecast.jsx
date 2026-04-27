import React from 'react'
import TodayShortForcast from "../components/TodayShortForcast"
import { prediction } from '../utils/Data';


const Sevenforecast = ({ toggle }) => {
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
          <div className='lg:flex lg:flex-col lg:h-[90vh] lg:gap-[1.5%] lg:justify-between '>
            <TodayShortForcast />
            <div className='bg-secondary lg:h-[66%] w-[93vw] lg:w-[99%] lg:px-[7%] lg:py-[4%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 lg:gap-1 gap-2.5'>
              <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
              <div className='grid grid-rows-7 h-full'>
                {
                  prediction.map(({ day, icon, temp, weather }) => {
                    return (
                      <div key={day} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                        <span>{day}</span>
                        <div className='flex gap-3 items-center justify-center'>
                          <img src={icon} alt='weather image' className='w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[35%] lg:h-auto fill-yellow-300' />
                          <span className='font-bold'>{weather}</span>
                        </div>
                        <span className='text-right'>{temp}</span>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        )
      }
    </>
  )
}

export default Sevenforecast
