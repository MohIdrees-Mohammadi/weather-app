import { FaUmbrella } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { SiRainyun } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMap } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSliders } from "react-icons/fa6";
const Header = () => {
    return (
        <>
             <aside className="fixed bottom-0 right-0 left-0 flex lg:fixed lg:h-[97.8%] lg:top-2 lg:pt-3 lg:rounded-2xl lg:left-3.5 lg:bottom-2 lg:flex-col lg:gap-[8%] lg:w-[5%] items-center h-13 bg-secondary ">
                <img className=" hidden lg:w-11.5 lg:h-11.5 lg:block  " src="https://assets.api.uizard.io/api/cdn/stream/d0bb0968-406e-4014-b9ab-080788e9d44b.png" alt="" />
                <ul className="flex lg:flex-col h-full lg:gap-[6%] justify-evenly lg:justify-normal w-full items-center fill-gray-500 text-gray-500 " >
                    <li>
                        {/* Weather link */}
                        <NavLink to={"/main"} end >
                            {
                                ({ isActive }) => (
                                    <div className={isActive ? 'flex flex-col items-center justify-center font-bold text-gray-300' : 'flex flex-col items-center fill-gray-500 justify-center'}>
                                        <SiRainyun className=" h-7 w-7 sm:h-5 sm:w-5" />
                                        <span className="hidden text-[12px] sm:block">Weather</span>
                                    </div>
                                )
                            }
                        </NavLink>
                    </li>
                    <li>
                        {/* City link */}
                        <NavLink to={"/main/city"} end >

                            {
                                ({ isActive }) => (
                                    <div className={isActive ? 'flex flex-col items-center justify-center font-bold text-gray-300' : 'flex flex-col items-center fill-gray-500 justify-center'}>
                                        <TfiMenuAlt className=" h-8 w-7 sm:h-5 sm:w-5" />
                                        <span className="hidden text-[12px] sm:block">Cities</span>
                                    </div>
                                )
                            }

                        </NavLink>
                    </li>
                    <li>
                        {/* Map link */}
                        <NavLink to={"/main/map"} end >
                            {
                                ({ isActive }) => (
                                    <div className={isActive ? 'flex flex-col items-center justify-center font-bold text-gray-300' : 'flex flex-col items-center fill-gray-500 justify-center'}>
                                        <IoMap className=" h-6 w-5 sm:h-5 sm:w-5" />
                                        <span className="hidden text-[12px] sm:block">Map</span>
                                    </div>
                                )
                            }
                        </NavLink>
                    </li>
                    <li>
                        {/* Setting link */}
                        <NavLink to={"/main/setting"} end >
                            {
                                ({ isActive }) => (
                                    <div className={isActive ? 'flex flex-col items-center justify-center font-bold text-gray-300' : 'flex flex-col items-center fill-gray-500 justify-center'}>
                                        <FaSliders className=" h-5.5 w-5.5 sm:h-5 sm:w-5" />
                                        <span className="hidden text-[12px] sm:block">Setting</span>
                                    </div>
                                )
                            }
                        </NavLink>
                    </li>


                </ul>

            </aside>

        </>
    )
}

export default Header




