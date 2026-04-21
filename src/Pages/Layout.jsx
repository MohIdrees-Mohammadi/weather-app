import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const Layout = () => {
  return (
    <div >
      <Header />
      <input type="text" placeholder='Search For Cities' className='ml-5 bg-secondary  absolute left-5 right-5 top-3 lg:top-2.5 lg:right-183 lg:left-22  text-gray-200  rounded-xl  justify-center px-2 py-3 ' />
      <div className=' pb-15 lg:pb-1 lg:pl-22 pt-15 bg-primary h-screen w-screen lg:pt-12'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;