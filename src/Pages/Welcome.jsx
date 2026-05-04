import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-primary h-screen text-gray-200 flex p-5'>
      {/* left side */}
      <div className='hidden lg:flex bg-secondary rounded-xl  justify-center items-center'>
        <img className='w-[80%]' src="https://assets.api.uizard.io/api/cdn/stream/d0bb0968-406e-4014-b9ab-080788e9d44b.png" alt="" />
      </div>

      {/* right side */}
      <div className='flex flex-col justify-center items-center gap-10'>
        <img className='w-[50%] lg:w-[25%]' src="https://assets.api.uizard.io/api/cdn/stream/d0bb0968-406e-4014-b9ab-080788e9d44b.png" alt="" />
        <div>
          <h1 className='text-5xl lg:text-7xl font-bold'>Breeze</h1>
          <p className='text-2xl mt-3 text-center'>Weather App</p>
        </div>
        <button onClick={()=> navigate("/main")} className='bg-sky-500 h-15 w-15 lg:w-45 mt-10 flex justify-center items-center rounded-full lg:rounded-4xl lg:h-12 '>
          <span className='hidden lg:block'>Get Started</span>
          <FaArrowRight className='lg:hidden text-4xl' />
        </button>
      </div>
    </div>
  )
}

export default Welcome