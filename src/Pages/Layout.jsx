import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <input type="text" placeholder='search...' className='pl-1 bg-darkBlue border absolute left-5 right-5 top-3 lg:top-2.5 lg:right-[32%] lg:left-[7%] border-gray-300 text-gray-300 rounded-md justify-center p-[1.2vh]' />
      <div className='lg:pl-[6.5%] pt-[8vh] bg-primary  lg:pt-[9vh]'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
