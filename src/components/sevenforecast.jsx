import React from 'react'
import TodayShortForcast from "../components/TodayShortForcast"
import { prediction } from '../utils/Data';


const Sevenforecast = ({ toggle }) => {
  console.log(toggle);
  return (
    <>
      {
        toggle ? (<div className='bg-secondary lg:h-full lg:min-h-0 lg:overflow-hidden w-full lg:w-full lg:px-[8%] lg:py-[5%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:h-122 p-4 pb-0 gap-3 lg:gap-4'>
          <h2 className='font-semibold text-xs sm:text-sm xl:text-base'>7-DAY FORECAST</h2>
          <div className='grid grid-rows-7 h-full min-h-0'>
            {
              prediction.map(({ day, icon, temp, weather }) => {
                return (
                  <div key={day} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                    <span className='text-xs sm:text-sm lg:text-sm xl:text-base'>{day}</span>
                    <div className='flex gap-3 items-center justify-center'>
                      <img src={icon} alt='weather image' className='w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[45%] lg:h-auto fill-yellow-300' />
                      <span className='text-xs sm:text-sm lg:text-sm xl:text-base font-bold'>{weather}</span>
                    </div>
                    <span className='text-xs sm:text-sm lg:text-sm xl:text-base text-right'>{temp}</span>
                  </div>
                )
              })
            }
          </div>

        </div>) : (
          <div className='lg:grid lg:h-full lg:min-h-0 lg:w-full lg:[grid-template-rows:minmax(0,0.55fr)_minmax(0,1fr)] lg:gap-3 xl:gap-4 '>
            <TodayShortForcast />
            <div className='bg-secondary lg:h-full lg:min-h-0 lg:overflow-hidden w-full lg:w-full lg:px-[7%] lg:py-[4%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:h-122 p-4 pb-0 lg:gap-3 gap-3'>
              <h2 className='font-semibold text-xs sm:text-sm xl:text-base'>7-DAY FORECAST</h2>
              <div className='grid grid-rows-7 h-full min-h-0'>
                {
                  prediction.map(({ day, icon, temp, weather }) => {
                    return (
                      <div key={day} className='grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 '>
                        <span className='text-xs sm:text-sm lg:text-sm xl:text-base'>{day}</span>
                        <div className='flex gap-3 items-center justify-center'>
                          <img src={icon} alt='weather image' className='w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[35%] lg:h-auto fill-yellow-300' />
                          <span className='text-xs sm:text-sm lg:text-sm xl:text-base font-bold'>{weather}</span>
                        </div>
                        <span className='text-xs sm:text-sm lg:text-sm xl:text-base text-right'>{temp}</span>
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
