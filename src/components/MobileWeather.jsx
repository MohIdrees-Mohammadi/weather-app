import React from 'react'
import { BsThermometerSun } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import sun from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"
const prediction = [
    {
        day: "Saturday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },
    {
        day: "Sunday",
        weather: "sunny",
        icon: sun,
        temp: '30°'

    },
    {
        day: "Monday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },
    {
        day: "Tuesday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },
    {
        day: "wednesday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },
    {
        day: "Tursday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },
    {
        day: "Friday",
        weather: "sunny",
        icon: sun,
        temp: '20°'

    },

]

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
]

const MobileWeather = () => {
    return (
        <section className='flex w-full flex-col items-center gap-3 bg-primary px-4 pb-6'>
            <div className='flex w-full max-w-md flex-col items-center pt-10'>
                <h1 className='text-4xl font-bold'>Kabul</h1>
                <p className='mt-2 text-sm text-gray-500'>Chance of rain: 0%</p>

                <div className='mt-8 flex items-center justify-center'>
                    <img className='h-auto w-32 sm:w-36' src={sun} alt="sunny" />
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <h1 className='text-5xl font-bold'>20°</h1>
                </div>
            </div>

            <div className='mt-4 flex w-full max-w-md flex-col gap-6 rounded-4xl bg-secondary p-5'>
                <h5 className='text-sm font-medium tracking-wide text-gray-500'>TODAY'S FORECAST</h5>

                <div className='flex justify-between gap-2'>
                    {weatherDetail.map((item) => (
                        <div
                            key={item.id}
                            className='flex min-w-0 flex-1 flex-col items-center gap-3 border-r border-r-gray-700 px-2 text-center last:border-r-0'
                        >
                            <p className='text-xs font-semibold'>{item.time}</p>
                            <img src={item.icon} alt="cloudy" className='h-10 w-auto' />
                            <h2 className='font-bold'>{item.temp}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wasi */}
            <div className='mt-3 w-full max-w-md rounded-2xl bg-secondary p-4 text-gray-400'>
                <h2 className='text-sm font-semibold'>7-DAY FORECAST</h2>
                <div className='mt-3 grid grid-rows-7'>
                    {
                        prediction.map((id) => {
                            const { day, weather, icon, temp } = id;
                            return (
                                <div key={day} className='grid grid-cols-3 items-center gap-2 border-b border-gray-500/30 py-3 text-sm'>
                                    <span className='justify-self-start'>{day}</span>
                                    <div className='flex items-center justify-center gap-2 justify-self-center text-center'>
                                        <img src={icon} alt='weather image' className='h-8 w-8 sm:h-9 sm:w-9' />
                                        <span className='font-bold text-gray-300'>{weather}</span>
                                    </div>
                                    <span className='justify-self-end text-right text-gray-300'>{temp}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            {/* Ahmad Shah Gouhari */}
            <div className='mt-3 w-full max-w-md rounded-2xl bg-secondary p-5'>
                <div className='flex items-center justify-between'>
                    <p className='text-sm font-medium text-gray-500'>AIR CONDATIONS</p>
                    <button className='h-8 rounded-full bg-cyan-800 px-4 text-sm text-white hover:bg-cyan-700'>
                        See More
                    </button>
                </div>

                <div className='mt-4 flex justify-between gap-4'>
                    <div className='flex w-1/2 flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <BsThermometerSun className='text-xl' />
                            <h3 className='text-base'>Real Feel</h3>
                        </div>
                        <h2 className='pl-7 text-xl font-bold text-gray-200'>25{"\u00B0"}C</h2>
                    </div>

                    <div className='flex w-1/2 flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <LuWind className='text-xl' />
                            <h3 className='text-base'>Wind</h3>
                        </div>
                        <h2 className='pl-7 text-xl font-bold text-gray-200'>0.2 km/h</h2>
                    </div>
                </div>

                <div className='mt-4 flex justify-between gap-4'>
                    <div className='flex w-1/2 flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <WiHumidity className='text-xl' />
                            <h3 className='text-base'>Humidity</h3>
                        </div>
                        <h2 className='pl-7 text-xl font-bold text-gray-200'>25%</h2>
                    </div>

                    <div className='flex w-1/2 flex-col gap-2'>
                        <div className='flex items-center gap-2 text-gray-400'>
                            <TbUvIndex className='text-xl' />
                            <h3 className='text-base'>UV Index</h3>
                        </div>
                        <h2 className='pl-7 text-xl font-bold text-gray-200'>3</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileWeather
