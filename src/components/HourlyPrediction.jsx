import React from "react";
import { weatherDetail } from "../utils/Data";
import TempCard from "./tempCard";
const PcWeatherMiddle = ({ toggle, hourly, weatherCode }) => {
    return (
        <>
            {toggle ? (
                <section className="bg-secondary  w-[93%] md:pb-[3.5%] xl:pb-[1.8%]  lg:pl-[2.3%] lg:pt-[1.5%] xl:pt-[1.8%] lg:w-[99%] lg:mx-auto overflow-x-auto shrink-0 lg:flex-nowrap [scrollbar-width:none] text-gray-400 rounded-xl lg:rounded-2xl flex flex-col h-50 lg:h-[33%] lg:m-0 p-4  gap-2 lg:gap-1">
                    <h2 className="text-sm font-semibold">TODAY'S FORECAST</h2>
                    <div className="flex font-semibold flex-nowrap sm:justify-between lg:grid lg:grid-cols-6 w-full h-full lg:h-[80%]  xl:my-auto ">
                        {
                            hourly && (
                                <>
                                <TempCard hourly = {hourly[6]} time ={"6:00 AM"} icon={weatherCode[6]}/>
                                <TempCard hourly = {hourly[9]} time ={"9:00 AM"} icon={weatherCode[9]}/>
                                <TempCard hourly = {hourly[12]} time ={"12:00 PM"} icon={weatherCode[12]}/>
                                <TempCard hourly = {hourly[15]} time ={"3:00 PM"} icon={weatherCode[15]}/>
                                <TempCard hourly = {hourly[18]} time ={"6:00 PM"} icon={weatherCode[18]}/>
                                <TempCard hourly = {hourly[21]} time ={"9:00 PM"} icon={weatherCode[21]}/>
                                </>
                            )

                        }
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
};

export default PcWeatherMiddle;
