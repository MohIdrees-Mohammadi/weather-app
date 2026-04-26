// import React from 'react'
// import PcWeatherTop from './PcWeatherTop'
// import PcWeatherMiddle from '../components/PcWeatherMiddle'

// import { BsThermometerSun } from "react-icons/bs";
// import { LuWind } from "react-icons/lu";
// import { WiHumidity } from "react-icons/wi";
// import { TbUvIndex } from "react-icons/tb";
// import { FaEye } from "react-icons/fa6";
// import { FaThermometerQuarter } from "react-icons/fa";
// import { FaDroplet } from "react-icons/fa6";
// import { IoSpeedometerSharp } from "react-icons/io5";
// import { WiSunset } from "react-icons/wi";
// import PCBottomCard from './AirConditions';

// const seeMore = [
//     {
//         id: 1,
//         icon: <TbUvIndex className='text-3xl' />,
//         Title: "UV Index",
//         Value: "3"
//     },
//     {
//         id: 2,
//         icon: <LuWind className='text-3xl' />,
//         Title: "Wind",
//         Value: "0.2 km/h"
//     },
//     {
//         id: 3,
//         icon: <WiHumidity className='text-3xl' />,
//         Title: "Humidity",
//         Value: "50%"
//     },
//     {
//         id: 4,
//         icon: <FaEye className='text-2xl' />,
//         Title: "Visibility",
//         Value: "12 km/h"
//     },
//     {
//         id: 5,
//         icon: <FaThermometerQuarter className='text-3xl' />,
//         Title: "Feels Like",
//         Value: "25Â°"
//     },
//     {
//         id: 6,
//         icon: <FaDroplet className='text-2xl' />,
//         Title: "Chance of Rain",
//         Value: "20%"
//     },
//     {
//         id: 7,
//         icon: <IoSpeedometerSharp className='text-2xl' />,
//         Title: "Pressure",
//         Value: "1012 hPa"
//     },
//     {
//         id: 8,
//         icon: <WiSunset className='text-3xl' />,
//         Title: "Sun set",
//         Value: "20:00"
//     },
// ]

// const PcWeather = ({toggle, setToggle}) => {
    

//     return (
//         <section className='flex min-w-0 flex-col gap-3 pb-4 lg:h-full lg:justify-evenly lg:pb-0'>
//             <PcWeatherTop />

//             {toggle && <PcWeatherMiddle />}
       
//             <PCBottomCard toggle ={toggle} setToggle={setToggle} />

            
//         </section>
//     )
// }

// export default PcWeather
