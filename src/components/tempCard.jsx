import React from "react";
import { iconCodes } from "../assets/icons/iconCode";


const tempCard = ({hourly, time, icon}) => {
  const weatherInfo = iconCodes[icon];
   
  return (
    <div className="flex justify-between gap-3 min-w-fit first:pl-0 last:border-none border-r px-[4%] lg:px-[3%] border-gray-500/30 flex-col items-center  xl:text-[19px]">
      <span className="font-semibold">{time}</span>
      {
        weatherInfo ? (
          <img src={weatherInfo.icon} alt={weatherInfo.label} className='w-17 object-contain h-17 lg:h-auto lg:w-[40%] xl:w-[45%]' />
        ) : (
          <span className="text-sm text-gray-300">Unknown</span>
        )
      }
      <span className="lg:text-[18px] text-gray-200">{Math.round(hourly)}</span>
    </div>
  );
};

export default tempCard;
