import React, { useEffect } from "react";
import Sevenforecast from "../components/sevenforecast";
import PcWeatherMiddle from "../components/HourlyPrediction";
import PcWeatherTop from "../components/PcWeatherTop";
import PCBottomCard from "../components/AirConditions";
import axios from "axios";

import sunny from "../assets/sunny.png";
import cloud from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";






const CurrentWeather = () => {
  const [toggle, setToggle] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState(null);
  const [sevenDaysForcast, setSevenDaysForcast] = React.useState(null);
  const [conditionCode, setConditionCode] = React.useState(null);

  const getWeather = async () => {
    try {
      const url ="https://api.openweathermap.org/data/2.5/weather?q=herat&appid=e98b2575eec19db0cf6d6917d0618239&units=metric";
      const res = await axios.get(url);
      setWeatherData(res.data);
      getDetailWeather(res.data.coord.lat, res.data.coord.lon);


      const weatherConditionCode = {
        "01d": sunny,
        "02d": cloudy,
        "03d": cloud
      }

      setConditionCode(weatherConditionCode)
    } catch (err) {
      console.log(err);
    }
  };
  const getDetailWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const res = await axios.get(url);
    setSevenDaysForcast(res.data.hourly.temperature_2m)
  };


  useEffect(() => {
    getWeather();
  
  }, []);


  return (
    <section className="flex w-full flex-col gap-6 px-4 pt-4 pb-24 sm:px-5 md:px-6 lg:h-full lg:min-h-0 lg:flex-row lg:gap-5 lg:overflow-hidden lg:px-4 lg:pt-0 lg:pb-3 xl:gap-6 xl:px-5">
      <div className={`flex flex-col lg:grid lg:w-[63%] lg:h-full lg:min-h-0 gap-6 md:gap-7 lg:gap-3 xl:gap-4 items-center lg:items-stretch text-gray-200 ${toggle ? "lg:[grid-template-rows:minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,1fr)]" : "lg:[grid-template-rows:minmax(0,0.9fr)_minmax(0,1.7fr)]"}`}>
        <PcWeatherTop weatherData={weatherData} code = {conditionCode} />
        <PcWeatherMiddle toggle={toggle} hourly={sevenDaysForcast}  />
        <div className="lg:hidden items-center justify-center flex w-full">
          <Sevenforecast />
        </div>
        <PCBottomCard
          toggle={toggle}
          setToggle={setToggle}
          weatherData={weatherData}
        />
      </div>

      <div className="hidden text-white lg:w-[36%] lg:h-full lg:min-h-0 lg:flex lg:items-end-safe ">
        <Sevenforecast toggle={toggle} setToggle={setToggle} />
      </div>
    </section>
  );
};

export default CurrentWeather;
