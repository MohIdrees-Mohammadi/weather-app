import React from 'react'
import cloud from "../assets/cloud.png"
import sun from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"



const PcWeatherTop = () => {

    
const [toggle, setToggle] = React.useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    

    return (
        <section>
            {

                toggle ? (
                    <div className='px-6 pt-6 xl:px-10'>
                        <div className='flex items-start justify-between gap-6'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-4xl font-bold xl:text-[2.65rem]'>Kabul</h1>
                                    <p className='text-sm text-gray-400 xl:text-base'>Humidity: 50%</p>
                                </div>
                                <div>
                                    <h1 className='text-5xl font-bold xl:text-[3.5rem]'>20°C</h1>
                                </div>
                            </div>

                            <div className='flex shrink-0 items-start justify-center pt-1'>
                                <img src={sun} alt="sun" className='h-auto w-32 xl:w-36' />
                            </div>
                        </div>
                    </div>
                ) : (<h1 onClick={handleToggle}>Detail Section</h1>)


            }


        </section>)
}

export default PcWeatherTop