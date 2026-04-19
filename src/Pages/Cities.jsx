import React from 'react'
import CityCard from '../components/CityCard'
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";

function Cities() {
  return (
    <div className="p-4">
      <CityCard name="Madrid" time="10:23" temp={31} icon={<WiDaySunny className=' size-20'/>} />
      <CityCard name="Vienna" time="11:23" temp={27} icon={<WiHail className=' size-20'/>} />
      <CityCard name="Athens" time="12:23" temp={33} icon={<WiDaySunny className=' size-20'/>} />
    </div>
  );
}

export default Cities;