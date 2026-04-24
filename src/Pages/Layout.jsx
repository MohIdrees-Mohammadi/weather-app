import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const Layout = () => {
  return (
    <div className='min-h-screen bg-primary lg:h-screen lg:overflow-hidden'>
      <Header />

      
      <div className='min-h-screen bg-primary pb-15 pt-3 lg:pl-22 lg:pr-4 lg:pt-2 lg:pb-1 lg:h-full '>

        <div className='mx-5 flex h-full flex-col gap-4 lg:mx-0'>

          <input type="text" placeholder='Search For Cities' className='w-full rounded-xl lg:w-2/3 bg-secondary px-2 py-3 text-gray-200 '/>

          <div className='w-full overflow-x-hidden lg:min-h-0 lg:flex-1'>

            <Outlet />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
