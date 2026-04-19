import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div >
      <Header />
      <input type="text" placeholder='search...' className='pl-1  border absolute left-5 right-5 top-3 lg:top-2.5 lg:right-76 lg:left-22 border-gray-300 bg-gray-200 rounded-md  justify-center p-1.5' />
      <div className='pb-15 lg:pb-1 lg:pl-22 pt-15 bg-primary h-screen w-screen lg:pt-12'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout