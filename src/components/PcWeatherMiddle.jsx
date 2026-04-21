import React from 'react'
import cloud from "../assets/cloud.png"
import sun from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"




const weatherDetail = [
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
const PcWeatherMiddle = () => {

    const [toggle, setToggle] = React.useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <section>
            {
                toggle ? (
                    <div className=' flex w-full flex-col gap-4 rounded-4xl bg-secondary  p-4 xl:p-5 mt-7 '>
                        <h5 className='text-sm font-medium tracking-wide text-gray-500'>TODAY'S FORECAST</h5>

                        <div className='grid grid-cols-6 items-center gap-3  '>
                            {weatherDetail.map((item) => (
                                <div key={item.id} className='grid items-center gap-3 border-r border-r-gray-700 px-3 text-center last:border-r-0'>
                                    <p className='text-[13px] font-semibold'>{item.time}</p>
                                    <img src={item.icon} alt="icons" className="w-20 h-20 object-contain mx-auto" />
                                    <h2 className='font-bold'>{item.temp}</h2>
                                </div>
                            ))}
                        </div>

                    </div>
                ) : (<h1 onClick={handleToggle} > Detail Section</h1>)
            }


        </section>)
}

export default PcWeatherMiddle