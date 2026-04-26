import React from 'react'
import Sevenforecast from '../components/sevenforecast'
import PcWeatherMiddle from '../components/HourlyPrediction'
import PcWeatherTop from '../components/PcWeatherTop'
import PCBottomCard from '../components/AirConditions'
const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png'
const semicloudy = 'https://assets.api.uizard.io/api/cdn/stream/634b1d13-e2b4-4766-9bb1-0397c173c222.png'
const cloudy = 'https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png'
const rainy = 'https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png'

const CurrentWeather = () => {
  const [toggle, setToggle] = React.useState(true)
  return (
    <section className=' lg:flex lg:h-[90vh] w-full lg:gap-[0.4%]'>

      <div className='flex flex-col lg:w-[64%] lg:h-full lg:gap-[0.5%] gap-5 pb-20 lg:pb-1 items-center lg:items-start text-gray-200'>
        <PcWeatherTop />
        <PcWeatherMiddle toggle={toggle} setToggle={setToggle} />
        <div className='lg:hidden items-center justify-center flex w-[93vw]'>
          <Sevenforecast />
        </div>
        <PCBottomCard toggle={toggle} setToggle={setToggle} />
      </div>

      <div className='hidden lg:pb-1 text-white lg:w-[35%] lg:h-full lg:flex lg:items-end-safe '>
        <Sevenforecast toggle={toggle} setToggle={setToggle} />
      </div>
    </section>
  )
}

export default CurrentWeather
