import React from "react";
import TempCard from "./tempCard";
import { iconCodes } from "../assets/icons/iconCode";

const TodayShortForcast = ({ hourly }) => {
  if (!hourly) {
    return (
      <div className="mt-3 lg:mt-0  lg:flex lg:h-[32%] lg:w-full rounded-2xl bg-secondary p-4 text-gray-400">
        loading
      </div>
    );
  }
  const now = new Date();
  now.setMinutes(0, 0, 0);
  const dayindex = hourly?.time?.findIndex((e) => new Date(e) >= now);
  const time = hourly?.time?.slice(dayindex, dayindex + 9);
  const codes = hourly?.weather_code?.slice(dayindex, dayindex + 9);
  const temps = hourly?.temperature_2m?.slice(dayindex, dayindex + 9);
  const hourfilter =time?.filter((_, index) => index % 3 === 0);

  return (
    <div className="mt-3 lg:mt-0 hidden lg:flex lg:h-[32%] lg:w-full  flex-col gap-1 lg:justify-between rounded-2xl bg-secondary p-4 lg:pl-[3%] lg:pt-[2.5%] lg:pb-[3%]">
      <h5 className="lg:text-[12px] xl:text-md font-medium lg:h-[10%] text-gray-500">
        TODAY'S FORECAST
      </h5>

      <div className="grid min-w-0 grid-cols-3 items-center lg:h-[83%]">
        {hourfilter.map((key, index) => (
          <div key={key} className="flex items-center h-full justify-between  gap-3 min-w-fit first:pl-0 last:border-none border-r px-[4%] lg:px-[3%] border-gray-500/30 flex-col xl:text-[19px]">
            <span className="font-semibold">
              {new Intl.DateTimeFormat([], { hour: 'numeric', hourCycle:'h12', minute:'2-digit'}).format(
                new Date(key),
              )}
            </span>
            <img src={iconCodes[codes[index * 3]]?.icon} alt={iconCodes[codes[index]]?.label} className="w-17 object-contain h-17 lg:h-auto lg:w-[40%] xl:w-[45%]"/>
            <span className="lg:text-[18px] text-gray-200">
              {Math.round(temps[index * 3])}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayShortForcast;
