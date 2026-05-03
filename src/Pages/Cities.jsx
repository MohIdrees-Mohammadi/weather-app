import React from "react";
import CityCard from "../components/CityCard";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import Sun from "../assets/sunny.png";
import Cloud from "../assets/cloudy.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Sevenforecast from "../components/sevenforecast";

const cities = [
  {
    name: "Madrid",
    time: "10:23",
    temp: 31,
    icon: <WiDaySunny className=" size-20" />,
  },
  {
    name: "Vienna",
    time: "11:23",
    temp: 27,
    icon: <WiHail className=" size-20" />,
  },
  {
    name: "Athens",
    time: "12:23",
    temp: 33,
    icon: <WiDaySunny className=" size-20" />,
  },
  {
    name: "Athens",
    time: "12:23",
    temp: 33,
    icon: <WiDaySunny className=" size-20" />,
  },
];





function Cities() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [sevenDaysForcast, setSevenDaysForcast] = React.useState(null);
  const [city, setCity] = React.useState(null);
  // const [conditionCode, setConditionCode] = React.useState(null);


  // this is the forecast of the three hours
  const Forecast = sevenDaysForcast ?[
  {
    time: "6:00",
    icon: Cloud,
    dara:  `${Math.round(sevenDaysForcast[6])}°`,
  },
  {
    time: "9:00",
    icon: Cloud,
    dara: `${Math.round(sevenDaysForcast[9])}°`,
  },
  {
    time: "12:00",
    icon: Cloud,
    dara: `${Math.round(sevenDaysForcast[12])}°`,
  },
] : [];
// this is the array of object of the three days forecast
const days = sevenDaysForcast ? [
  {
    day: "Today",
    icon: Sun,
    condition: "Sunny",
    date: "36/22",
  },
  {
    day: "Tue",
    icon: Sun,
    condition: "Sunny",
    date: "37/21",
  },
  {
    day: "Wed",
    icon: Sun,
    condition: "Sunny",
    date: "37/21",
  },
] : [];

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e98b2575eec19db0cf6d6917d0618239&units=metric`;
      const res = await axios.get(url);
      setWeatherData(res.data);
      getDetailWeather(res.data.coord.lat, res.data.coord.lon);

      // const weatherConditionCode = {
      //   "01d": sunny,
      //   // "02d": cloudy,
      //   "03d": cloud,
      // };

      // setConditionCode(weatherConditionCode);
    } catch (err) {
      console.log(err);
    }
  };
  const getDetailWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const res = await axios.get(url);
    setSevenDaysForcast(res.data.hourly.temperature_2m);
  };
  return (

  // the very main section of cities page
    <div className=" w-full  flex flex-col lg:flex-row lg:gap-10 ">
      {/* input section */}
      <input
        type="text"
        placeholder="Search for Cities"
        className=" hidden text-gray-300 lg:block pl-3 placeholder-gray-200 bg-secondary  absolute left-5 right-5 top-3 lg:top-2.5 lg:right-[37.8%] lg:left-[7%]  rounded-md justify-center p-[1.2vh] "
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(f)=> {
          if (f.key === "Enter"){
            getWeather();
          }
        }}
      />
      {/* my classmates codes */}
      <div className="w-full lg:w-[60vw]  pt-2.5 lg:p-4">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            name={city.name}
            time={city.time}
            temp={city.temp}
            icon={city.icon}
          />
        ))}
      </div>
      {/* right side all codes */}
      <section className="bg-primary w-screen h-screen lg:h-screen lg:w-[40%] overflow-hidden">
        {/* header section */}
        <div className="w-full  h-[32%] text-gray-200 flex flex-col lg:flex-row justify-between  ">
          {/* first header section */}
          <div className="flex flex-col items-center gap-2.5 font-bold ">
            <span className="text-3xl">{weatherData && weatherData.name}</span>
            <p className="text-md text-gray-400">
              Humidity {weatherData && weatherData.main.humidity}
            </p>
            <span className="hidden lg:block mt-2.5 text-5xl font-bold fix">
              {Math.round(weatherData && weatherData.main.temp) }°
            </span>
          </div>
          <img
            src={Sun}
            className="hidden lg:block overflow-hidden text-center size-37.5 lg:text-8xl mt-3.75"
          />
          <div className="flex flex-col justify-center items-center w-full lg:hidden">
            <img
              src={Sun}
              className="text-center   size-20.5  text-9xl mt-3.75  lg:mr-12.5"
            />
            <span className="lg:hidden  text-2xl font-bold pt-2.5">{Math.round(weatherData && weatherData.main.temp) }°</span>
          </div>
        </div>
        {/* Second section */}
        <div className="w-full h-[30%] text-gray-300  border-t border-gray-700 border-b mt-10 lg:mt-0">
          <span className="font-bold pl-7.5 text-[10px] lg:text-xl ">
            Today's Forecast
          </span>

          <div className="flex pl-2.5 h-full pt-2">
            {Forecast.map((enter, index) => (
              <div className="flex w-full  flex-col justify-center items-center h-[85%] border-r border-r-gray-700 last:border-r-0">
                <span className="text-md text-gray-400 p font-bold ">
                  {enter.time}
                </span>
                <img
                  src={enter.icon}
                  className="size-20 text-gray-400 p-3 font-bold "
                />
                <p className="text-md text-gray-400 p-3 font-bold ">
                  {enter.dara}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* third section */}
        <div className="bg-primary w-full   mt-2.5 text-gray-200 ">
          <span className="pl-7.5 font-bold">3-Day Forcast</span>

          <div className="flex flex-col pb-18.75   lg:h-full">
            {days.map((e, index) => (
              <div className="w-full  flex justify-around items-center pt-5 border-b border-gray-700   ">
                <span className="font-bold w-2.5">{e.day}</span>
                <div className=" flex justify-center items-center gap-2.5 lg:ml-2.5">
                  <img src={e.icon} className="size-8 lg:size-12" />
                  <span className="text-[15px] font-bold lg:text-md">
                    {e.condition}
                  </span>
                </div>
                <span className="font-bold">{e.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cities;
