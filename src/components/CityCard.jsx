import React from 'react'


function CityCard({name, time, temp, icon} ) {
  
  return (
    <div className="flex items-center justify-between w-full h-32.5 bg-secondary hover:bg-[#26374a] transition-all duration-300 p-3 rounded-3xl mb-3 cursor-pointer hover:-translate-y-1">
      
      <div className="w-20 text-gray-200 ">{icon}</div>

      <div className="flex-1 w-2xl ">
        <h3 className="text-white lg:text-2xl font-semibold">{name}</h3>
        <p className="text-gray-400 lg:text-xl font-bold pt-3.5">{time}</p>
      </div>

      <span className="text-white lg:text-3xl font-semibold pr-3">
        {temp}°
      </span>
    </div>
  );
}

export default CityCard;


