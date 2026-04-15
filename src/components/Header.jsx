import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoListSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='bg-secondary text-gray-400 fixed lg:static bottom-0 lg:h-[98vh] flex lg:flex-col gap-5 p-3 lg:rounded w-screen lg:w-25'>
            <span className='hidden lg:block'>logo</span>
            <nav className=' w-screen lg:w-auto lg:mt-18 '>
                <ul className='flex justify-around items-center  gap-15 lg:gap-10 w-full lg:flex-col '>

                    {/* Weather link */}
                    <NavLink to={"/main"} end >
                        {
                            ({ isActive }) => (
                                <li className={isActive ? "flex justify-center items-center flex-col gap-2 text-gray-100 font-semibold" : 'flex justify-center items-center flex-col gap-2'}>
                                    <TiWeatherPartlySunny className="size-9 lg:size-7.5" />
                                    <span className="hidden text-md  lg:block">Weather</span>
                                </li>
                            )
                        }

                    </NavLink>

                    {/* City link */}
                    <NavLink to={"/main/city"} end >
                        {
                            ({ isActive }) => (
                                <li className={isActive ? "flex justify-center items-center flex-col gap-2 text-gray-100 font-semibold" : 'flex justify-center items-center flex-col gap-2'}>
                                    <IoListSharp className="size-10 lg:size-6.25" />
                                    <span className="hidden text-md  lg:block">City</span>
                                </li>
                            )
                        }

                    </NavLink>

                    {/* Map link */}
                    <NavLink to={"/main/map"} end >
                        {
                            ({ isActive }) => (
                                <li className={isActive ? "flex justify-center items-center flex-col gap-2 text-gray-100 font-semibold" : 'flex justify-center items-center flex-col gap-2'}>
                                    <FaMap className="size-9 lg:size-7" />
                                    <span className="hidden text-md  lg:block">Map</span>
                                </li>
                            )
                        }

                    </NavLink>

                    {/* Setting link */}
                    <NavLink to={"/main/setting"} end >
                        {
                            ({ isActive }) => (
                                <li className={isActive ? "flex justify-center items-center flex-col gap-2 text-gray-100 font-semibold" : 'flex justify-center items-center flex-col gap-2'}>
                                    <IoIosSettings className="size-11 lg:w-7.5" />
                                    <span className="hidden text-md  lg:block">Settings</span>
                                </li>
                            )
                        }

                    </NavLink>






                </ul>
            </nav>
        </header>
    )
}

export default Header