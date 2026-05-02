import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <input type="text" placeholder='Search for Cities' className='pl-3 placeholder-gray-200 bg-secondary  absolute left-5 right-5 top-3 lg:top-2.5 lg:right-[35%] lg:left-[7%]  rounded-md justify-center p-[1.2vh] ' />
      <div className='lg:pl-[6.5%] pt-[12vh] bg-primary  lg:pt-[9vh]'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
