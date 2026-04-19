import React from 'react'


function CityCard({ name, time, temp, icon }) {
  return (
    <div className="flex items-center justify-between w-2xl bg-secondary hover:bg-[#26374a] transition-all duration-300 p-3 rounded-2xl mb-3 cursor-pointer hover:-translate-y-1">
      
      <div className="w-20 text-gray-200">{icon}</div>

      <div className="flex-1 w-2xl">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>

      <span className="text-white text-xl font-bold">
        {temp}°
      </span>
    </div>
  );
}

export default CityCard;


