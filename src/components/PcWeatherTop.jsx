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
        <>
            {

                toggle ? (
                    <section className='flex flex-col lg:mx-auto lg:flex-row lg:justify-between  lg:h-[34%] items-center lg:w-[96%] '>
                    <div className='flex flex-col items-center justify-center gap-9  lg:ml-2.5 lg:items-center lg:justify-evenly h-full'>
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='font-bold text-3xl lg:text-4xl'>kabul</h1>
                            <span className='text-gray-400'>humudity: 20%</span>
                        </div>
                        <span className='text-5xl lg:text-4xl hidden lg:block font-extrabold font-mono'>20°</span>
                    </div>
                    <img src={sun} alt='weather image' className=' lg:w-[25%] lg:h-auto h-55 ' />
                    <span className='text-5xl lg:hidden font-extrabold font-mono'>20°</span>
                </section>
                ) : (<h1 onClick={handleToggle}>Detail Section</h1>)


            }


        </>)
}

export default PcWeatherTop
