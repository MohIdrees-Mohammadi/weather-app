import React from 'react'
import PcWeather from '../components/PcWeather'
import MobileWeather from '../components/MobileWeather'
import Sevenforecast from '../components/sevenforecast'
const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'
const semicloudy = 'https://assets.api.uizard.io/api/cdn/stream/634b1d13-e2b4-4766-9bb1-0397c173c222.png'
const cloudy = 'https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png'
const rainy = 'https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png'



const CurrentWeather = () => {

  return (

    <section className='text-gray-300 lg:gap-1 w-full   lg:flex  pb-30 lg:pb-0 bg-primary '>
      {/* Desktop Layout -- */}
      <div className='lg:w-[60%] ml-3 hidden lg:block '> <PcWeather /> </div>

      {/* Mobile Layout -- */}
      <div className='lg:w-[40%] block lg:hidden '> <MobileWeather /> </div>


      {/*WASI */}
      <Sevenforecast/>


    </section>


  )
}

export default CurrentWeather