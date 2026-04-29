import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-primary pb-16 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:pl-[6.5%] lg:pt-3 lg:pb-0'>
        <div className='hidden px-4 lg:block xl:px-5'>
          <div className='flex h-10 w-[63%] items-center rounded-xl bg-secondary px-4 text-gray-300 xl:h-11'>
            <input
              type="text" placeholder='Search for Cities' className='h-full w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-500 xl:text-base'/>
          </div>
        </div>

        <div className='lg:h-[calc(100vh-4rem)] lg:min-h-0 lg:pt-2'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
