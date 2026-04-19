import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='pb-15  lg:pl-22 bg-primary h-screen w-screen'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout