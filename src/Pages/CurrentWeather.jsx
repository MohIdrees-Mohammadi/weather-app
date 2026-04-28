import React, { useEffect } from "react";
import Sevenforecast from "../components/sevenforecast";
import PcWeatherMiddle from "../components/HourlyPrediction";
import PcWeatherTop from "../components/PcWeatherTop";
import PCBottomCard from "../components/AirConditions";
import axios from "axios";
const sun =
  "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png";
const semicloudy =
  "https://assets.api.uizard.io/api/cdn/stream/634b1d13-e2b4-4766-9bb1-0397c173c222.png";
const cloudy =
  "https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png";
const rainy =
  "https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png";

const CurrentWeather = () => {
  const [toggle, setToggle] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState(null);
  const [sevenDaysForcast, setSevenDaysForcast] = React.useState(null);

  const getWeather = async () => {
    try {
      const url ="https://api.openweathermap.org/data/2.5/weather?q=herat&appid=e98b2575eec19db0cf6d6917d0618239&units=metric";
      const res = await axios.get(url);
      setWeatherData(res.data);
      getDetailWeather(res.data.coord.lat, res.data.coord.lon);

    } catch (err) {
      console.log(err);
    }
  };
  const getDetailWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const res = await axios.get(url);
    setSevenDaysForcast(res.data.hourly.temperature_2m)
  };


  useEffect(() => {
    getWeather();
  
  }, []);


  return (
    <section className=" lg:flex lg:h-[91vh] w-full lg:gap-[0.4%]">
      <div className="flex flex-col lg:w-[64%] lg:h-full lg:gap-[0.5%] gap-5 pb-20 lg:pb-1 items-center lg:items-start text-gray-200">
        <PcWeatherTop weatherData={weatherData} />
        <PcWeatherMiddle toggle={toggle} hourly={sevenDaysForcast}  />
        <div className="lg:hidden items-center justify-center flex w-[93vw]">
          <Sevenforecast />
        </div>
        <PCBottomCard
          toggle={toggle}
          setToggle={setToggle}
          weatherData={weatherData}
        />
      </div>

      <div className="hidden lg:pb-1 text-white lg:w-[35%] lg:h-full lg:flex lg:items-end-safe ">
        <Sevenforecast toggle={toggle} setToggle={setToggle} />
      </div>
    </section>
  );
};

export default CurrentWeather;
