import React from 'react'
import TodayShortForcast from "../components/TodayShortForcast"
import { iconCodes } from "../assets/icons/iconCode";


const Sevenforecast = ({ toggle, sevendayforecast }) => {

  if(!sevendayforecast || !sevendayforecast.temperature_2m || !sevendayforecast.weather_code){
    return <div>loading</div>
  }
  const dayindices = [8,32,56,80,104,128,152]
  const sevenday =dayindices.map((index)=> sevendayforecast?.time[index])
  const sevendaytemp = dayindices.map((index)=> sevendayforecast?.temperature_2m[index])
  const sevendaycodes = dayindices.map((index)=> sevendayforecast?.weather_code[index])

  const renderForecastRows = (compact = false) => (
    sevenday.map((data, index ) => {
      const weatherCode = sevendaycodes[index];
      const weatherInfo = iconCodes[weatherCode];

      return (
        <div key={data} className='grid grid-cols-[0.95fr_1.45fr_auto] gap-2 w-full items-center border-b last:border-none border-gray-500/30 py-1.5'>
          <span className='text-sm md:text-base'>{index === 0 ? 'Today':new Intl.DateTimeFormat([],{weekday:'long'}).format(new Date(data))}</span>
          <div className='grid grid-cols-[auto_1fr] gap-2 items-center min-w-0'>
            {
              weatherInfo ? (
                <>
                  <img
                    src={weatherInfo.icon}
                    alt={weatherInfo.label}
                    className={compact ? 'w-7 h-7 md:w-10 md:h-10 object-contain' : 'w-8 h-8 md:w-9 md:h-9 object-contain'}
                  />
                  <span className={compact ? 'font-bold text-[11px] md:text-xs leading-tight truncate' : 'font-bold text-xs md:text-sm leading-tight truncate'}>
                    {weatherInfo.label}
                  </span>
                </>
              ) : (
                <span className={compact ? 'font-bold text-[11px] md:text-xs truncate' : 'font-bold text-xs md:text-sm truncate'}>Unknown</span>
              )
            }
          </div>
          <span className='text-right text-sm md:text-base'>{Math.round(sevendaytemp[index])}</span>
        </div>
      )
    })
  )

  return (
    <>
      {
        toggle ? (<div className='bg-secondary lg:h-[95%]  w-[93vw] lg:w-[99%] mx-auto lg:px-[8%] lg:py-[5%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 gap-2.5'>
          <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
          <div className='grid grid-rows-7 h-full'>
            {renderForecastRows(true)}
          </div>

        </div>) : (
          <div className='lg:flex lg:flex-col lg:h-[90vh] lg:gap-[1.5%] lg:justify-between '>
            <TodayShortForcast hourly={sevendayforecast.temperature_2m} weatherCode={sevendayforecast.weather_code} />
            <div className='bg-secondary lg:h-[66%] w-[93vw] lg:w-[99%] lg:px-[7%] lg:py-[4%] px-[6%] text-gray-400 rounded-2xl flex flex-col h-150 md:w-[93vw] md:h-122 p-4 pb-0 lg:gap-1 gap-2.5'>
              <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
              <div className='grid grid-rows-7 h-full'>
                {renderForecastRows()}
              </div>

            </div>
          </div>
        )
      }
    </>
  )
}

export default Sevenforecast
