import React from 'react'
import CurrentWeatherMain from '../components/CurrentWeatherMain'
import MobileCurrentWeather from '../components/MobileCurrentWeather'

const CurrentWeather = () => {
  const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'
  return (
<<<<<<< HEAD
    
    <section className='text-gray-300 w-screen lg:flex '>
      {/* Ahmad Shah Gouhari */}
      <div className='lg:w-[60%] ml-3 hidden lg:block '> <CurrentWeatherMain /> </div>

      {/* Mobile */}
      <div className='lg:w-[40%] block lg:hidden '> <MobileCurrentWeather /> </div>


      {/*WASI */}
      <div className='lg:w-[40%] hidden lg:block '>Right</div>


    </section>
    
=======
    <main className='text-gray-300 w-screen lg:w-full flex'>

      <div className='lg:w-[65%]'>
        left
      </div>
      <div className='lg:w-[35%]'>Right</div>
    </main>
>>>>>>> 2fd5d110664d2555095ecda601c42c2db1e8a0da
  )
}

export default CurrentWeather