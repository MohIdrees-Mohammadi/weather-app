import React from 'react'
import CityCard from '../components/CityCard'
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import Sun from "../assets/sunny.png";
import Cloud from "../assets/cloudy.png"



const cities = [
  { name: "Madrid", time: "10:23", temp: 31, icon: <WiDaySunny className=' size-20' /> },
  { name: "Vienna", time: "11:23", temp: 27, icon: <WiHail className=' size-20' /> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20' /> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20' /> },
];

const Forecast = [
  {
    time: "6:00",
    icon: Cloud,
    dara: "25°",
  },
  {

    time: "9:00",
    icon: Cloud,
    dara: "28°",
  },
  {

    time: "12:00",
    icon: Cloud,
    dara: "33°",
  },

];

const days = [
  {
    day: "Today",
    icon: Sun,
    condition: "Sunny",
    date: "36/22"
  },
  {
    day: "Tueee",
    icon: Sun,
    condition: "Sunny",
    date: "37/21"
  },
  {
    day: "Wedd",
    icon: Sun,
    condition: "Sunny",
    date: "37/21"
  },
]




function Cities({ weatherData }) {

  return (
    <div className=" w-full h-screen lg:h-[91vh]  flex flex-col lg:flex-row lg:gap-10 ">

      <div className='w-full lg:w-[60vw]  pt-2.5 lg:p-4'>
        {cities.map((city, index) => (
          <CityCard key={index} name={city.name} time={city.time} temp={city.temp} icon={city.icon} />
        ))}

      </div>
      {/* right side all codes */}
      <section className='bg-primary w-screen h-screen lg:h-[85vh] lg:w-[40%]'>
        {/* header section */}
        <div className=' w-full  h-[30%] text-gray-200 flex flex-col lg:flex-row justify-between  '>
          {/* first header section */}
          <div className=' flex flex-col items-center gap-2.5 font-bold '>
            <span className='text-3xl'>Kabul</span>
            <p className='text-md text-gray-400'>chance of rain</p>
            <span className='hidden lg:block mt-2.5 text-5xl font-bold fix'>31°</span>
          </div>
          <img src={Sun} className='hidden lg:block text-center ml-35  size-37.5 lg:text-8xl mt-3.75   lg:mr-12.5' />
          <div className='flex flex-col justify-center items-center w-full lg:hidden'>
            <img src={Sun} className='text-center   size-20.5  text-9xl mt-3.75  lg:mr-12.5' />
            <span className='lg:hidden  text-2xl font-bold pt-2.5'>31°</span>

          </div>
        </div>
        {/* Second section */}
        <div className='w-full h-[30%] text-gray-300  border-t border-gray-700 border-b mt-10 lg:mt-0'>
          <span className='font-bold pl-7.5 text-[10px] lg:text-xl '>Today's Forecast</span>

          <div className='flex justify-around pl-2.5 h-full pt-2'>
            {
              Forecast.map((enter, index) => (
                <div className='flex w-full  flex-col justify-center items-center h-[85%] border-r border-r-gray-700 last:border-r-0' >
                  <span className='text-md text-gray-400 p font-bold '>{enter.time}</span>
                  <img src={enter.icon} className='size-20 text-gray-400 p-3 font-bold ' />
                  <p className='text-md text-gray-400 p-3 font-bold '>{enter.dara}</p>
                </div>
              ))
            }
          </div>


        </div>
        {/* third section */}
        <div className='bg-primary w-full  h-[35%] mt-2.5 text-gray-200 '>
          <span className='pl-7.5 font-bold'>3-Day Forcast</span>

          <div className='flex flex-col pb-18.75 lg:pb-0'>
            {
              days.map((e, index) => (
                <div className='w-full flex justify-around items-center pt-5 border-b border-gray-700  lg:pb-2.5'>
                  <span className='font-bold'>{e.day}</span>
                  <div className=' flex justify-center items-center gap-2.5'>
                    <img src={e.icon} className='size-8 lg:size-12' />
                    <span className='text-[15px] font-bold lg:text-md'>{e.condition}</span>
                  </div>
                  <span className='font-bold'>{e.date}</span>

                </div>

              ))
            }

          </div>

        </div>
      </section>
    </div>
  );
}

export default Cities;