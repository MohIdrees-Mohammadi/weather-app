import React from 'react'
import { seeMore } from '../utils/Data';
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const PCBottomCard = ({ toggle, setToggle }) => {

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            {toggle ? (
                <div className='w-[93%] lg:pl-[2.3%] rounded-xl lg:w-full lg:mx-auto h-50 lg:h-[31%] lg:pt-[1.8%] bg-secondary p-4 lg:pb-0 lg:pr-[1.5%] text-gray-400'>
                    <div className='flex items-center justify-between lg:h-[10%]'>
                        <h2 className='font-semibold text-sm  '>AIR CONDITIONS </h2>
                        <button onClick={handleToggle} className='py-0.5 px-1.5 text-gray-100 bg-blue-500 rounded-full'>See more</button>
                    </div>

                    <div className='grid grid-cols-2 py-3 px-1.5 items-center lg:py-0 lg:items-start lg:h-[87%] lg:text-md xl:text-xl'>
                        <div className='flex flex-col gap-3 lg:gap-0 lg:h-full lg:justify-evenly'>
                            <div className='flex gap-2 items-baseline'>
                                <FaTemperatureHalf />
                                <div className='flex flex-col gap-1'>
                                    <span>Real feel</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>20°</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaDroplet />
                                <div className='flex text-sm flex-col gap-1'>
                                    <span className=''>Chance Of Rain</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>0%</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:items-start lg:gap-0 lg:h-full justify-evenly lg:text-md xl:text-xl'>
                            <div className='flex gap-2 items-baseline '>
                                <FaWind />
                                <div className='flex flex-col gap-1'>
                                    <span>Wind</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>3 Km/h</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaSun />
                                <div className='flex text-sm flex-col gap-1'>
                                    <span >UV Index</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div onClick={handleToggle} className='grid cursor-pointer gap-4 md:grid-cols-2'>
                    {seeMore.map((item) => (
                        <div key={item.id} className='rounded-2xl bg-secondary p-6 text-left xl:p-3'>
                            <div className='flex items-center gap-3 text-gray-400'>
                                {item.icon}
                                <h3 className='text-lg font-semibold tracking-wide text-gray-400 xl:text-xl'>{item.Title}</h3>
                            </div>

                            <h2 className='mt-3 pl-11 text-xl font-semibold text-gray-100 xl:text-2xl'>{item.Value}</h2>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default PCBottomCard