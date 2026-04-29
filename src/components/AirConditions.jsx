import React from 'react'
import { seeMore } from '../utils/Data';
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const PCBottomCard = ({ toggle, setToggle, weatherData }) => {

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            {toggle ? (
                <div className='w-full rounded-xl lg:w-full lg:mx-auto h-50 lg:h-full lg:min-h-0 lg:overflow-hidden bg-secondary p-4 sm:p-5 lg:p-5 text-gray-400'>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='font-semibold text-xs sm:text-sm xl:text-base'>AIR CONDITIONS </h2>
                        <button onClick={handleToggle} className='shrink-0 py-1.5 px-3 text-xs sm:text-sm text-gray-100 bg-cyan-600 rounded-md transition hover:bg-cyan-400'>See more</button>
                    </div>

                    <div className='grid grid-cols-2 gap-x-4 py-4 items-center text-xs sm:text-sm lg:min-h-0 lg:py-4 lg:items-start lg:h-[calc(100%-2.5rem)] lg:text-base xl:text-lg'>
                        <div className='flex flex-col gap-3 lg:gap-0 lg:h-full lg:justify-evenly'>
                            <div className='flex gap-2 items-baseline'>
                                <FaTemperatureHalf />
                                <div className='flex flex-col gap-1 min-w-0'>
                                    <span>Real feel</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>20°</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaDroplet />
                                <div className='flex text-xs sm:text-sm lg:text-sm xl:text-base flex-col gap-1 min-w-0'>
                                    <span className=''>Chance Of Rain</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>0%</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:items-start lg:gap-0 lg:h-full justify-evenly lg:text-base xl:text-lg'>
                            <div className='flex gap-2 items-baseline '>
                                <FaWind />
                                <div className='flex flex-col gap-1 min-w-0'>
                                    <span>Wind</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>{weatherData && weatherData.wind.speed} Km/h</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaSun />
                                <div className='flex text-xs sm:text-sm lg:text-sm xl:text-base flex-col gap-1 min-w-0'>
                                    <span >UV Index</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div onClick={handleToggle} className='grid cursor-pointer gap-3 lg:gap-3 lg:h-full lg:min-h-0 md:grid-cols-2 lg:w-full'>
                    {seeMore.map((item) => (
                        <div key={item.id} className='rounded-xl bg-secondary p-3 sm:p-4 lg:px-[4%] lg:pt-[4%] lg:gap-[3%] lg:flex lg:items-start'>

                            {item.icon}
                            <div className='mt-2 lg:mt-[-0.5%] lg:flex lg:flex-col lg:items-start lg:gap-1'>
                                <h3 className='text-xs sm:text-sm lg:text-base font-semibold text-gray-400 xl:text-lg'>{item.Title}</h3>
                                <h2 className='text-sm sm:text-base lg:text-lg font-semibold text-gray-100 xl:text-xl'>{item.Value}</h2>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default PCBottomCard
