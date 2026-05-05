import React from "react";
import TodayShortForcast from "../components/TodayShortForcast";
import { prediction } from "../utils/Data";
import cloud from "../assets/cloud.png";
import { iconCodes } from "../assets/icons/iconCode";

const Sevenforecast = ({ toggle, sevendayforecast, weatherCode }) => {
  if (!sevendayforecast || !sevendayforecast.temperature_2m || !weatherCode) {
    return <div>loading</div>;
  }
  
  const dayindices = [0,1,2,3,4,5,6]
    const sevenday = dayindices.map(
    (index) => sevendayforecast?.time[index * 24],
  );
  const seventemp = dayindices.map((index) => {
    const dayblock = sevendayforecast.temperature_2m.slice(
      index * 24,
      (index + 1) * 24,
    );
    const sum = dayblock.reduce((temp, acc) => temp + acc, 0);
    return (sum/24).toFixed(1)
  });


  return (
    <>
      {toggle ? (
        <div className="bg-secondary lg:h-[95%]  w-[93vw] lg:w-[99%] mx-auto lg:px-[8%] lg:py-[5%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 gap-2.5">
          <h2 className="font-semibold text-sm">7-DAY FORECAST</h2>
          <div className="grid grid-rows-7 h-full">
            {sevenday.map((data, index) => {
              return (
                <div
                  key={data}
                  className="grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 "
                >
                  <span>
                    {index === 0
                      ? "Today"
                      : new Intl.DateTimeFormat([], { weekday: "long" }).format(
                          new Date(data),
                        )}
                  </span>
                  <div className="flex gap-3 items-center justify-center">
                    <img
                      src={iconCodes[weatherCode[(index*24)+7]].icon}
                      alt="weather image"
                      className="w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[45%] lg:h-auto fill-yellow-300"
                    />
                    <span className="font-bold">{iconCodes[weatherCode[(index*24)+7]].label}</span>
                  </div>
                  <span className="text-right">{seventemp[index]}°</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="lg:flex lg:flex-col lg:h-[90vh] lg:gap-[1.5%] lg:justify-between ">
          <TodayShortForcast />
          <div className="bg-secondary lg:h-[95%]  w-[93vw] lg:w-[99%] mx-auto lg:px-[8%] lg:py-[5%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 gap-2.5">
          <h2 className="font-semibold text-sm">7-DAY FORECAST</h2>
          <div className="grid grid-rows-7 h-full">
            {sevenday.map((data, index) => {
              return (
                <div
                  key={data}
                  className="grid grid-cols-3 w-full items-center justify-center border-b last:border-none border-gray-500/30 "
                >
                  <span>
                    {index === 0
                      ? "Today"
                      : new Intl.DateTimeFormat([], { weekday: "long" }).format(
                          new Date(data),
                        )}
                  </span>
                  <div className="flex gap-3 items-center justify-center">
                    <img
                      src={cloud}
                      alt="weather image"
                      className="w-[45%] h-auto md:h-auto md:w-10.5 lg:w-[45%] lg:h-auto fill-yellow-300"
                    />
                    <span className="font-bold">cloudy</span>
                  </div>
                  <span className="text-right">{seventemp[index]}°</span>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Sevenforecast;
