import React from 'react'
import CityCard from '../components/CityCard'
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";



const cities = [
  { name: "Madrid", time: "10:23", temp: 31, icon: <WiDaySunny className=' size-20' /> },
  { name: "Vienna", time: "11:23", temp: 27, icon: <WiHail className=' size-20' /> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20' /> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20' /> },
];

const Forecast = [
  {
    time: "6:00",
    icon: <FaCloud className='text-4xl text-sky-300'/>,
    dara: "25°",
  },
  {

    time: "9:00",
    icon: <FaCloud className='text-4xl text-sky-300' />,
    dara: "28°",
  },
  {

    time: "12:00",
    icon: <FaCloud className='text-4xl text-sky-300' />,
    dara: "33°",
  },

];

const days = [
  {
    day: "Today",
    icon: <MdSunny className='text-3xl text-yellow-400' />,
    condition: "Sunny",
    date: "36/22"
  },
   {
    day: "Tueee",
    icon: <MdSunny className='text-3xl text-yellow-400' />,
    condition: "Sunny",
    date: "37/21"
  },
   {
    day: "Wedd",
    icon: <MdSunny className='text-3xl text-yellow-400' />,
    condition: "Sunny",
    date: "37/21"
  },
]



function Cities() {
  return (
    <div className="p-4 w-full h-[80vh]  flex flex-col lg:flex-row lg:gap-10 ">
      <div className='w-full lg:w-[60vw]  pt-2.5'>
        {cities.map((city, index) => (
          <CityCard key={index} name={city.name} time={city.time} temp={city.temp} icon={city.icon} />
        ))}

      </div>
      {/* right side all codes */}
      <section className='bg-primary lg:w-[40%] h-[85vh]   '>
        {/* header section */}
        <div className='w-full  h-[30%] text-gray-200 flex flex-col lg:flex-row justify-between pt-3.5 '>
          {/* first header section */}
          <div className='flex flex-col items-center mt-2.5 gap-2.5 font-bold '>
            <span className='text-3xl'>Madrid</span>
            <p className='text-xl text-gray-400'>chance of rain</p>
            <span className='hidden lg:block mt-2.5 text-7xl font-bold'>31°</span>
          </div>
          <MdSunny  className='hidden lg:block text-center ml-35  text-[350px] lg:text-9xl mt-3.75  text-yellow-400 lg:mr-12.5' />
          <div className='flex flex-col justify-center items-center w-full lg:hidden'>
          <MdSunny  className='text-center   text-7xl lg:text-9xl mt-3.75  text-yellow-400 lg:mr-12.5' />
          <span className='lg:hidden  text-6xl font-bold pt-2.5'>31°</span>

          </div>
        </div>
        {/* Second section */}
        <div className='w-full h-[35%] text-gray-300 p-2.5  border-t border-gray-700 border-b mt-25 lg:mt-5'>
          <span className='font-bold pl-7.5'>Today's Forecast</span>

          <div className='flex justify-around pl-2.5'>
            {
              Forecast.map((enter, index) => (
                <div className='flex w-full  flex-col justify-center items-center border-r border-r-gray-500 last:border-r-0' key={index}>
                  <span className='text-lg text-gray-400 p-3.75 font-bold '>{enter.time}</span>
                  <div className='text-lg text-gray-400 p-3.75 font-bold '>{enter.icon}</div>
                  <p className='text-lg text-gray-400 p-3.75 font-bold '>{enter.dara}</p>
                </div>
              ))
            }
          </div>


        </div>
        {/* third section */}
        <div className='bg-primary w-full  h-[35%] mt-2.5 text-gray-200 pl-7.5'>
          <span >3-Day Forcast</span>

          <div className='flex flex-col '>
            {
              days.map((e, index)=>(
                <div className='w-full flex justify-between items-center pt-5 border-b border-gray-400 pb-2.5'>
                  <span>{e.day}</span>
              <div className=' flex justify-center items-center gap-2.5'>
                <div>{e.icon}</div>
                <span>{e.condition}</span>
              </div>
              <span>{e.date}</span>

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