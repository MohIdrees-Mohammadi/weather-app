import React from 'react'
import { FaCircle } from "react-icons/fa";
import { IoCloudy } from "react-icons/io5";
import { BsThermometerSun } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import cloud from "../assets/cloud.png"
import sun from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"



const weatherDetail = [
    {
        id: 1,
        icon: cloudy,
        temp: "20°",
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
]



const MobileCurrentWeather = () => {





    return (
        <section className='flex flex-col justify-center items-center gap-2.5 bg-primary w-screen'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold mt-10'>Kabul</h1>
                <p className='mt-2 text-md text-gray-500'>Chance of rain: 0%</p>

                <div className='mt-10 flex justify-center items-center'>
                    < img className='w-[50%]' src={sun} alt="Sunny" />
                </div>

                <div className='flex justify-center items-center mt-8'>
                    <h1 className='text-4xl font-bold'>20°</h1>
                </div>
            </div>

            <div className='w-[90%] h-auto mt-4 p-5 gap-6 flex flex-col bg-secondary rounded-4xl '>

                <h5 className='font-medium  text-gray-500'>TODAY'S FORECAST</h5>
                <div className='flex justify-between'>

                    {
                        weatherDetail.map((item) => (
                            <div key={item.id} className='flex flex-col gap-3 items-center border-r-gray-700  border-r px-6'>
                                <p className='font-semibold text-[13px]'>{item.time}</p>
                                <img src={item.icon} alt="cloud" className='w-auto h=auto' />
                                <h2 className='font-bold'>{item.temp}</h2>
                            </div>
                        ))
                    }

                </div>

            </div>


            {/* Wasi */}
            <div className='lg:ml-6  bg-secondary lg:mt-17.5 text-gray-400 rounded-2xl mx-auto w-[90%] lg:h-[86.5vh] p-4 h-105 lg:w-[35%] lg:block'>

  
          <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
          <div className='grid grid-row-7 h-full'>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Saturday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Sunday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Monday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Tuesday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Wednsday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Tursday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center  '>
              <span>Friday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            
          </div>

      </div>

            {/* Ahmad Shah Gouhari */}
            <div className=' w-[90%] bg-secondary rounded-2xl p-5 h-auto mt-3'>

                <div className='flex justify-between items-center'>
                    <p className='  text-gray-500  font-medium'>AIR CONDATIONS</p>
                    <button className='bg-cyan-800 text-white hover:bg-cyan-700 h-8 px-4 rounded-full '>See More</button>
                </div>
                <div className='flex justify-between mt-3'>


                    <div className='flex flex-col items-center'>
                        <div className='flex items-center  '>
                            <BsThermometerSun className='font-bold text-xl' />
                            <h3 className='text-xl ml-2 '>Real Feel</h3>
                        </div>
                        <h2 className='text-xl font-bold'>25°C</h2>
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex items-center '>
                            <LuWind className='font-bold text-xl ' />
                            <h3 className='text-md '>Wind</h3>
                        </div>
                        <h2 className='text-xl font-bold'>0.2 km/h</h2>
                    </div>

                </div>
                <div className='flex justify-between mt-3 px-6 '>


                    <div className='flex flex-col items-center'>
                        <div className='flex items-center'>
                            <WiHumidity className='font-bold text-xl' />
                            <h3 className='text-md '>Humidity</h3>
                        </div>
                        <h2 className=' font-bold'>25%</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center  '>
                            <TbUvIndex className='font-bold text-xl' />
                            <h3 className='text-md'>UV Index</h3>
                        </div>
                        <h2 className=' font-bold '>3</h2>
                    </div>

                </div>




            </div>









        </section>
    )
}

export default MobileCurrentWeather