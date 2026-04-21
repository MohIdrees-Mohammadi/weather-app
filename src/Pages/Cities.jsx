import React from 'react'
import CityCard from '../components/CityCard'
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";

const cities = [
  { name: "Madrid", time: "10:23", temp: 31, icon: <WiDaySunny className=' size-20'/> },
  { name: "Vienna", time: "11:23", temp: 27, icon: <WiHail className=' size-20'/> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20'/> },
  { name: "Athens", time: "12:23", temp: 33, icon: <WiDaySunny className=' size-20'/> },
];


function Cities() {
  return (
    <div className="p-4">
      {cities.map((city, index) => (
        <CityCard key={index} name={city.name} time={city.time} temp={city.temp} icon={city.icon} />
      ))}
    </div>
  );
}

export default Cities;