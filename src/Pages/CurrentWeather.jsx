import React from 'react'
import CurrentWeatherMain from '../components/CurrentWeatherMain'
import MobileCurrentWeather from '../components/MobileCurrentWeather'

const CurrentWeather = () => {
  return (
    
    <section className='text-gray-300 w-screen lg:flex '>
      {/* Ahmad Shah Gouhari */}
      <div className='lg:w-[60%] ml-3 hidden lg:block '> <CurrentWeatherMain /> </div>

      {/* Mobile */}
      <div className='lg:w-[40%] block lg:hidden '> <MobileCurrentWeather /> </div>


      {/*WASI */}
      <div className='lg:w-[40%] hidden lg:block '>Right</div>


    </section>
    
  )
}

export default CurrentWeather