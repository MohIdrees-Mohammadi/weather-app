import React from 'react'
import PcWeather from '../components/PcWeather'
import MobileWeather from '../components/MobileWeather'

const CurrentWeather = () => {
  const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'
  const semicloudy = 'https://assets.api.uizard.io/api/cdn/stream/634b1d13-e2b4-4766-9bb1-0397c173c222.png'
  const cloudy = 'https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png'
  const rainy = 'https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png'
  return (

    <section className='text-gray-300 lg:gap-1 w-full   lg:flex  pb-30 lg:pb-0 bg-primary '>
      {/* Desktop Layout -- */}
      <div className='lg:w-[60%] ml-3 hidden lg:block '> <PcWeather /> </div>

      {/* Mobile Layout -- */}
      <div className='lg:w-[40%] block lg:hidden '> <MobileWeather /> </div>


      {/*WASI */}
       <section className='flex justify-end  lg:w-[35%] '>
        <div className='ml-6  bg-secondary lg:mt-11 text-gray-400 rounded-2xl hidden lg:h-[86.5vh] lg:w-[80%] p-4 gap-2.5 lg:block'>

  
          <h2 className='font-semibold text-sm'>7-DAY FORECAST</h2>
          <div className='grid grid-row-7 h-full'>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Saturday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Sunday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Monday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Tuesday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Wednsday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center border-b border-gray-500/30 '>
              <span>Tursday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            <div className='grid grid-cols-3 w-full items-center justify-center  '>
              <span>Friday</span>
              <div className='flex gap-3 items-center justify-center'>
                <img src={sun} alt='weather image' className='w-9 h-9 md:h-auto md:w-10.5 lg:w-12 lg:h-12 fill-yellow-300' />
                <span className='font-bold'>Sunny</span>
              </div>
              <span className='text-right'>20°</span>
            </div>
            
          </div>

      </div> 
       </section>


    </section>


  )
}

export default CurrentWeather