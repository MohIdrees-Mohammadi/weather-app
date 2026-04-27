import React from 'react'
import { weatherDetail } from '../utils/Data'

const PcWeatherMiddle = () => {
    return (
        <section className='bg-secondary  w-[93%] md:pb-[3.5%] xl:pb-[1.8%]  lg:pl-[2.3%] lg:pt-[1.5%] xl:pt-[1.8%] lg:w-full lg:mx-auto overflow-x-auto shrink-0 lg:flex-nowrap [scrollbar-width:none] text-gray-400 rounded-xl flex flex-col h-50 lg:h-[34%] lg:m-0 p-4  gap-2 lg:gap-1'>
            <h2 className='text-sm font-semibold'>TODAY'S FORECAST</h2>
            <div className='flex font-semibold flex-nowrap sm:justify-between lg:grid lg:grid-cols-6 w-full h-full lg:h-[80%]  xl:my-auto '>


                {
                    weatherDetail.map((date, index) => {
                        return (
                            <div key={date.id} className='flex justify-between gap-3 min-w-fit first:pl-0 last:border-none border-r px-[4%] lg:px-[3%] border-gray-500/30 flex-col items-center  xl:text-[19px]'>
                                <span className='font-semibold'>{date.time}</span>
                                <img src={date.icon} alt="weather image" className='w-17 object-contain h-17 lg:h-auto lg:w-[40%] xl:w-[45%]' />
                                <span className='lg:text-[18px] text-gray-200'>{date.temp}</span>

                            </div>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default PcWeatherMiddle
