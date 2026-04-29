import React from "react";

const tempCard = ({hourly, time}) => {
  return (
    <div className="flex justify-between gap-3 min-w-fit first:pl-0 last:border-none border-r px-[4%] lg:px-[3%] border-gray-500/30 flex-col items-center  xl:text-[19px]">
      <span className="text-xs sm:text-sm lg:text-[13px] xl:text-base font-semibold">{time}</span>
      {/* <img src={date.icon} alt="weather image" className='w-17 object-contain h-17 lg:h-auto lg:w-[40%] xl:w-[45%]' /> */}
      <span className="text-base sm:text-lg lg:text-[18px] xl:text-xl text-gray-200">{Math.round(hourly)}</span>
    </div>
  );
};

export default tempCard;
