import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoListSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
const Header = () => {
  return (
    <header className='bg-secondary text-gray-200 fixed lg:static bottom-0 lg:h-[98vh] flex lg:flex-col gap-5 p-3 lg:rounded w-screen lg:w-25'>
        <span className='hidden lg:block'>logo</span>
        <nav >
            <ul className='flex justify-center items-center  gap-15 w-screen lg:flex-col '>
                <li>
                    <TiWeatherPartlySunny size={30} />
                    <span className="hidden lg:block">Weather</span>
                </li>
                <li>
                    <span className="hidden lg:block">City</span>
                    <IoListSharp  size={30}/>
                    </li>
                <li>
                    <FaMap  size={30}/>
                    <span className="hidden lg:block">Map</span>
                </li>
                <li>
                    <IoIosSettings  size={30}/>
                    <span className="hidden lg:block">Settings</span>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header