import React from 'react'
import { FaCircle } from "react-icons/fa";
import { IoCloudy } from "react-icons/io5";
import { BsThermometerSun } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";


const CurrentWeatherMain = () => {
    return (

        // {/* PC */}

        <section>
            {/* top */}
            <div className='main1-head '>
                <input className='search_input hidden lg:block w-full h-8   p-2.5 bg-secondary rounded-lg outline-none' type="text" placeholder='Search for cities' />
                <div className='flex justify-between   pt-8 px-15'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-4xl font-bold'>Kabul</h1>
                            <p>Humidity: 50%</p>
                        </div>
                        <div className='mt-2 '>
                            <h1 className='text-5xl font-bold'>20°C</h1>
                        </div>
                    </div>
                    <div className='mr-8'>
                        <FaCircle className='fill-yellow-300 text-9xl shadow-lg  inset-2.5' />
                    </div>
                </div>
            </div>

            {/*  midddle */}
            <div className='main2 w-full h-auto mt-4 p-5 gap-6 flex flex-col bg-secondary rounded-4xl '>

                <h5 className='font-medium  text-gray-500'>TODAY'S FORECAST</h5>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-3 items-center border-r-gray-700  border-r px-6'>
                        <p className='font-semibold'>6:00 AM</p>
                        <IoCloudy className='text-5xl' />
                        <h2 className='font-bold'>25°</h2>
                    </div>
                    <div className='flex flex-col gap-3 items-center  border-r-gray-700 border-r px-6'>
                        <p className='font-semibold'>9:00 AM</p>
                        <FaCircle className='text-5xl text-amber-300' />
                        <h2 className='font-bold'>28°</h2>
                    </div>
                    <div className='flex flex-col gap-3 items-center  border-r-gray-700  border-r px-6'>
                        <p className='font-semibold'>12:00 PM </p>
                        <FaCircle className='text-5xl text-amber-300' />
                        <h2 className='font-bold'>33°</h2>
                    </div>
                    <div className='flex flex-col gap-3 items-center  border-r-gray-700  border-r px-6'>
                        <p className='font-semibold'>3:00 PM</p>
                        <FaCircle className='text-5xl text-amber-300' />
                        <h2 className='font-bold'>34°</h2>
                    </div>

                    <div className='flex flex-col gap-3 items-center  border-r-gray-700  border-r px-6 '>
                        <p className='font-semibold'>6:00 PM</p>
                        <FaCircle className='text-5xl text-amber-300' />
                        <h2 className='font-bold'>28°</h2>
                    </div>
                    <div className='flex flex-col gap-3 items-center '>
                        <p className='font-semibold'>9:00 PM</p>
                        <FaCircle className='text-5xl text-amber-300' />
                        <h2 className='font-bold'>28°</h2>
                    </div>
                </div>
            </div>
            {/* Down */}

            <div className='main3 w-full h-auto p-4 gap-5 flex flex-col bg-secondary rounded-4xl mt-3'>

                <div className='flex justify-between items-center'>
                    <h4 className='font-semibold  text-gray-500 '>AIR CONDATIONS</h4>
                    <button className='bg-cyan-800 text-white hover:bg-cyan-700 h-10 px-5 rounded-full '>See More</button>
                </div>
                <div className='flex justify-start gap-10'>


                    <div className='flex flex-col items-center'>
                        <div className='flex items-center ml-10'><BsThermometerSun className='font-bold text-3xl' />
                            <h3 className='text-xl ml-4'>Real Feel</h3>
                        </div>
                        <h2 className='text-2xl font-bold ml-15'>25°C</h2>
                    </div>
                    <div className='flex flex-col items-center ml-48'>
                        <div className='flex items-center '><LuWind className='font-bold text-3xl' />
                            <h3 className='text-xl ml-4'>Wind</h3>
                        </div>
                        <h2 className='text-2xl font-bold ml-15'>0.2 km/h</h2>
                    </div>

                </div>
                <div className='flex justify-start gap-10'>


                    <div className='flex flex-col items-center'>
                        <div className='flex items-center  ml-10'><WiHumidity className='font-bold text-3xl' />
                            <h3 className='text-xl ml-4'>Humidity</h3>
                        </div>
                        <h2 className='text-2xl font-bold ml-15'>25%</h2>
                    </div>
                    <div className='flex flex-col items-center ml-55'>
                        <div className='flex items-center  '><TbUvIndex className='font-bold text-3xl' />
                            <h3 className='text-xl ml-4'>UV Index</h3>
                        </div>
                        <h2 className='text-2xl font-bold ml-15'>3</h2>
                    </div>

                </div>











            </div>









        </section>
    )
}

export default CurrentWeatherMain