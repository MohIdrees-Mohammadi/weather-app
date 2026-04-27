import cloud from "../assets/cloud.png"
import cloudy from "../assets/cloudy.png"
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import { FaThermometerQuarter } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoSpeedometerSharp } from "react-icons/io5";
import { WiSunset } from "react-icons/wi";
const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'

// hourly prediction information

export const weatherDetail = [
    {
        id: 1,
        icon: cloudy,
        temp: "20° ",
        time: "6:00 AM"
    },
    {
        id: 2,
        icon: cloudy,
        temp: "20°",
        time: "9:00 AM"
    },
    {
        id: 3,
        icon: cloudy,
        temp: "21°",
        time: "12:00 PM"
    }
    , {
        id: 4,
        icon: sun,
        temp: "20°",
        time: "3:00 PM"

    },
    {
        id: 5,
        icon: cloud,
        temp: "18°",
        time: "6:00 PM"

    },
    {
        id: 6,
        icon: cloud,
        temp: "18°",
        time: "9:00 PM"

    }
]

// today's short forecast data

export const weatherData = [
    {
        id: 1,
        icon: cloudy,
        temp: "20° ",
        time: "6:00 AM"
    },
    {
        id: 2,
        icon: cloudy,
        temp: "20°",
        time: "9:00 AM"
    },
    {
        id: 3,
        icon: cloudy,
        temp: "21°",
        time: "12:00 PM"
    }
    , {
        id: 4,
        icon: sun,
        temp: "20°",
        time: "3:00 PM"

    },
    {
        id: 5,
        icon: cloud,
        temp: "18°",
        time: "6:00 PM"

    },
    {
        id: 6,
        icon: cloud,
        temp: "18°",
        time: "9:00 PM"

    }
]


// see more information

export const seeMore = [
    {
        id: 1,
        icon: <TbUvIndex className='text-3xl' />,
        Title: "UV Index",
        Value: "3"
    },
    {
        id: 2,
        icon: <LuWind className='text-3xl' />,
        Title: "Wind",
        Value: "0.2 km/h"
    },
    {
        id: 3,
        icon: <WiHumidity className='text-3xl' />,
        Title: "Humidity",
        Value: "50%"
    },
    {
        id: 4,
        icon: <FaEye className='text-2xl' />,
        Title: "Visibility",
        Value: "12 km/h"
    },
    {
        id: 5,
        icon: <FaThermometerQuarter className='text-3xl' />,
        Title: "Feels Like",
        Value: "25Â°"
    },
    {
        id: 6,
        icon: <FaDroplet className='text-2xl' />,
        Title: "Chance of Rain",
        Value: "20%"
    },
    {
        id: 7,
        icon: <IoSpeedometerSharp className='text-2xl' />,
        Title: "Pressure",
        Value: "1012 hPa"
    },
    {
        id: 8,
        icon: <WiSunset className='text-3xl' />,
        Title: "Sun set",
        Value: "20:00"
    },
]

// sevenforecast information

export const prediction = [
  {
    day: "Saturday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Sunday",
    weather: "sunny",
    icon: cloud,
    temp: '20°'

  },
  {
    day: "Monday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Tuesday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "wednesday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Tursday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },
  {
    day: "Friday",
    weather: "sunny",
    icon: sun,
    temp: '20°'

  },

]