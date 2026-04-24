import React from 'react'
import PcWeatherTop from '../components/PcWeatherTop'
import PcWeatherMiddle from '../components/PcWeatherMiddle'

import { BsThermometerSun } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import { FaThermometerQuarter } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoSpeedometerSharp } from "react-icons/io5";
import { WiSunset } from "react-icons/wi";

const seeMore = [
    {
        id: 1,
        icon: <TbUvIndex className='text-3xl' />,
        Title: "UV Index",
        Value: "3"
    },
    {
        id: 2,
        icon: <LuWind className='text-3xl' />,
        Title: "Wind",
        Value: "0.2 km/h"
    },
    {
        id: 3,
        icon: <WiHumidity className='text-3xl' />,
        Title: "Humidity",
        Value: "50%"
    },
    {
        id: 4,
        icon: <FaEye className='text-2xl' />,
        Title: "Visibility",
        Value: "12 km/h"
    },
    {
        id: 5,
        icon: <FaThermometerQuarter className='text-3xl' />,
        Title: "Feels Like",
        Value: "25Â°"
    },
    {
        id: 6,
        icon: <FaDroplet className='text-2xl' />,
        Title: "Chance of Rain",
        Value: "20%"
    },
    {
        id: 7,
        icon: <IoSpeedometerSharp className='text-2xl' />,
        Title: "Pressure",
        Value: "1012 hPa"
    },
    {
        id: 8,
        icon: <WiSunset className='text-3xl' />,
        Title: "Sun set",
        Value: "20:00"
    },
]

const PcWeather = () => {
    const [toggle, setToggle] = React.useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <section className='flex min-w-0 flex-col gap-3 pb-4 lg:h-full lg:justify-evenly lg:pb-0'>
            <PcWeatherTop />

            {toggle && <PcWeatherMiddle />}

            <section className='min-w-0'>
                {toggle ? (
                    <div className='main3 flex w-full flex-col gap-3 rounded-4xl bg-secondary p-4'>
                        <div className='flex items-center justify-between h-auto'>
                            <h4 className='text-md font-semibold tracking-wide text-gray-500'>AIR CONDATIONS</h4>
                            <button onClick={handleToggle} className='h-8 rounded-full bg-sky-400 px-4 text-xs font-medium text-white hover:bg-sky-700 xl:text-sm'>
                                See More
                            </button>
                        </div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex w-1/2 flex-col gap-2'>
                                <div className='flex items-center gap-2 text-gray-400'>
                                    <BsThermometerSun className='text-xl' />
                                    <h3 className='text-base xl:text-lg'>Real Feel</h3>
                                </div>
                                <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>25Â°</h2>
                            </div>

                            <div className='flex w-1/2 flex-col gap-2'>
                                <div className='flex items-center gap-2 text-gray-400'>
                                    <LuWind className='text-xl' />
                                    <h3 className='text-base xl:text-lg'>Wind</h3>
                                </div>
                                <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>0.2 km/h</h2>
                            </div>
                        </div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex w-1/2 flex-col gap-2'>
                                <div className='flex items-center gap-2 text-gray-400'>
                                    <WiHumidity className='text-xl' />
                                    <h3 className='text-base xl:text-lg'>Humidity</h3>
                                </div>
                                <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>25%</h2>
                            </div>

                            <div className='flex w-1/2 flex-col gap-2'>
                                <div className='flex items-center gap-2 text-gray-400'>
                                    <TbUvIndex className='text-xl' />
                                    <h3 className='text-base xl:text-lg'>UV Index</h3>
                                </div>
                                <h2 className='pl-8 text-lg font-bold text-gray-300 xl:text-xl'>3</h2>
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
            </section>
        </section>
    )
}

export default PcWeather
