import React from 'react'
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
        temp: "20° ",
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
    , {
        id: 4,
        icon: sun,
        temp: "20°",
        time: "3:00 PM"

    },
    {
        id: 5,
        icon: cloud,
        temp: "18°",
        time: "6:00 PM"

    },
    {
        id: 6,
        icon: cloud,
        temp: "18°",
        time: "9:00 PM"

    }
]
const CurrentWeatherMain = () => {
    return (
        <section className='ml-5 space-y-3 pr-3 pb-4'>
            {/* top */}
            <div className='px-6 pt-6 xl:px-10'>
                <div className='flex items-start justify-between gap-6'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl font-bold xl:text-[2.65rem]'>Kabul</h1>
                            <p className='text-sm text-gray-400 xl:text-base'>Humidity: 50%</p>
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold xl:text-[3.5rem]'>20°C</h1>
                        </div>
                    </div>

                    <div className='flex shrink-0 items-start justify-center pt-1'>
                        <img src={sun} alt="sun" className='h-auto w-32 xl:w-36' />
                    </div>
                </div>
            </div>

            {/* middle */}
            <div className=' flex w-full flex-col gap-4 rounded-4xl bg-secondary  p-4 xl:p-5 mt-7 '>
                <h5 className='text-sm font-medium tracking-wide text-gray-500'>TODAY'S FORECAST</h5>

            <div className='grid grid-cols-6 items-center gap-3  '>
                {weatherDetail.map((item) => (
                    <div key={item.id} className='grid items-center gap-3 border-r border-r-gray-700 px-3 text-center last:border-r-0'>
                        <p className='text-[13px] font-semibold'>{item.time}</p>
                        <img src={item.icon} alt="icons"   className="w-20 h-20 object-contain mx-auto" />
                        <h2 className='font-bold'>{item.temp}</h2>
                    </div>
                ))}
                </div>

            </div>

            {/* down */}
            <div className='main3 flex w-full flex-col gap-3 rounded-4xl bg-secondary p-4'>
                <div className='flex items-center justify-between h-auto'>
                    <h4 className='text-md font-semibold tracking-wide text-gray-500'>AIR CONDATIONS</h4>
                    <button className='h-8 rounded-full bg-sky-400 px-4 text-xs font-medium text-white hover:bg-sky-700 xl:text-sm'>
                        See More
                    </button>
                </div>

                <div className='flex justify-between gap-5'>
                    <div className='flex w-[48%] flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <BsThermometerSun className='text-xl' />
                            <h3 className='text-base xl:text-lg'>Real Feel</h3>
                        </div>
                        <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>25°C</h2>
                    </div>

                    <div className='flex w-[48%] flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <LuWind className='text-xl' />
                            <h3 className='text-base xl:text-lg'>Wind</h3>
                        </div>
                        <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>0.2 km/h</h2>
                    </div>
                </div>

                <div className='flex justify-between gap-5'>
                    <div className='flex w-[48%] flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <WiHumidity className='text-xl' />
                            <h3 className='text-base xl:text-lg'>Humidity</h3>
                        </div>
                        <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>25%</h2>
                    </div>

                    <div className='flex w-[48%] flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <TbUvIndex className='text-xl' />
                            <h3 className='text-base xl:text-lg'>UV Index</h3>
                        </div>
                        <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>3</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentWeatherMain
