import React from "react";
import TempCard from "./tempCard";
const PcWeatherMiddle = ({ toggle, hourly }) => {
    return (
        <>
            {toggle ? (
                <section className="bg-secondary w-full md:pb-[3.5%] xl:pb-[1.8%] lg:pl-[2.3%] lg:pt-[1.5%] xl:pt-[1.8%] lg:w-full lg:h-full lg:min-h-0 lg:mx-auto overflow-x-auto lg:overflow-hidden lg:flex-nowrap [scrollbar-width:none] text-gray-400 rounded-xl flex flex-col h-50 lg:m-0 p-4 gap-3 lg:gap-2 xl:gap-3">
                    <h2 className="text-xs sm:text-sm xl:text-base font-semibold">TODAY'S FORECAST</h2>
                    <div className="flex font-semibold flex-nowrap sm:justify-between lg:grid lg:grid-cols-6 w-full h-full min-h-0 lg:h-[80%] xl:my-auto ">
                        {
                            hourly && (
                                <>
                                <TempCard hourly = {hourly[6]} time ={"6:00 AM"}/>
                                <TempCard hourly = {hourly[9]} time ={"9:00 AM"}/>
                                <TempCard hourly = {hourly[12]} time ={"12:00 PM"}/>
                                <TempCard hourly = {hourly[15]} time ={"3:00 PM"}/>
                                <TempCard hourly = {hourly[18]} time ={"6:00 PM"}/>
                                <TempCard hourly = {hourly[21]} time ={"9:00 PM"}/>
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
