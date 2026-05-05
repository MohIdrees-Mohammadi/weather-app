import React from 'react'
import { seeMore } from '../utils/Data';
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const PCBottomCard = ({ toggle, setToggle, weatherData, detailWeather }) => {
    const degreeUnit = "°";

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const currentWeather = detailWeather?.current;
    const dailyWeather = detailWeather?.daily;
    const hourlyWeather = detailWeather?.hourly;
    const currentHourIndex = hourlyWeather?.time?.indexOf(currentWeather?.time);
    const visibilityValue = currentHourIndex >= 0 ? hourlyWeather?.visibility?.[currentHourIndex] : null;

    const summaryValues = {
        realFeel: currentWeather?.apparent_temperature != null ? `${Math.round(currentWeather.apparent_temperature)}${degreeUnit}` : "--",
        chanceOfRain: dailyWeather?.precipitation_probability_max?.[0] != null ? `${dailyWeather.precipitation_probability_max[0]}%` : "--",
        wind: currentWeather?.wind_speed_10m != null ? `${currentWeather.wind_speed_10m} km/h` : "--",
        uvIndex: dailyWeather?.uv_index_max?.[0] ?? "--",
    };

    const seeMoreValues = {
        1: dailyWeather?.uv_index_max?.[0] ?? "--",
        2: currentWeather?.wind_speed_10m != null ? `${currentWeather.wind_speed_10m} km/h` : "--",
        3: currentWeather?.relative_humidity_2m != null ? `${currentWeather.relative_humidity_2m}%` : "--",
        4: visibilityValue != null ? `${(visibilityValue / 1000).toFixed(1)} km` : weatherData?.visibility != null ? `${(weatherData.visibility / 1000).toFixed(1)} km` : "--",
        5: currentWeather?.apparent_temperature != null ? `${Math.round(currentWeather.apparent_temperature)}${degreeUnit}` : "--",
        6: dailyWeather?.precipitation_probability_max?.[0] != null ? `${dailyWeather.precipitation_probability_max[0]}%` : "--",
        7: currentWeather?.pressure_msl != null ? `${currentWeather.pressure_msl} hPa` : "--",
        8: dailyWeather?.sunset?.[0] ? dailyWeather.sunset[0].split("T")[1]?.slice(0, 5) : "--",
    };

    return (
        <>
            {toggle ? (
                <div className='w-[93%] lg:pl-[2.3%] rounded-xl lg:rounded-2xl lg:w-[99%] lg:mx-auto h-50 lg:h-[31%] lg:pt-[1.8%] bg-secondary p-4 lg:pb-0 lg:pr-[1.5%] text-gray-400'>
                    <div className='flex items-center justify-between lg:h-[10%]'>
                        <h2 className='font-semibold text-sm'>AIR CONDITIONS </h2>
                        <button onClick={handleToggle} className='py-0.5 px-1.5 text-gray-100 lg:py-0.7 lg:px-2 lg:text-md xl:text-sm bg-cyan-500 rounded-full'>See more</button>
                    </div>

                    <div className='grid grid-cols-2 py-3 px-1.5 items-center lg:py-0 lg:items-start lg:h-[87%] lg:text-md xl:text-xl'>
                        <div className='flex flex-col gap-3 lg:gap-0 lg:h-full lg:justify-evenly'>
                            <div className='flex gap-2 items-baseline'>
                                <FaTemperatureHalf />
                                <div className='flex flex-col gap-1'>
                                    <span>Real feel</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>{summaryValues.realFeel}</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaDroplet />
                                <div className='flex text-sm flex-col gap-1'>
                                    <span>Chance Of Rain</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>{summaryValues.chanceOfRain}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:items-start lg:gap-0 lg:h-full justify-evenly lg:text-md xl:text-xl'>
                            <div className='flex gap-2 items-baseline'>
                                <FaWind />
                                <div className='flex flex-col gap-1'>
                                    <span>Wind</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>{summaryValues.wind}</span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-baseline'>
                                <FaSun />
                                <div className='flex text-sm flex-col gap-1'>
                                    <span>UV Index</span>
                                    <span className='font-semibold lg:text-xl lg:text-gray-300'>{summaryValues.uvIndex}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div onClick={handleToggle} className='grid cursor-pointer gap-3 lg:h-[70%] md:grid-cols-2 lg:w-full'>
                    {seeMore.map((item) => (
                        <div key={item.id} className='rounded-2xl bg-secondary px-4 py-4 lg:px-[7%] lg:py-[8%] flex items-start gap-3 min-h-24'>
                            <div className='shrink-0 pt-1'>
                                {item.icon}
                            </div>
                            <div className='flex flex-col items-start gap-1 min-w-0'>
                                <h3 className='text-sm font-semibold text-gray-400 xl:text-base'>{item.Title}</h3>
                                <h2 className='text-base font-semibold text-gray-100 xl:text-lg break-words'>{seeMoreValues[item.id]}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default PCBottomCard
