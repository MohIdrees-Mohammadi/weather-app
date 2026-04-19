import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const Layout = () => {
  return (
    <div className='flex gap-2.5 lg:p-3 bg-primary h-screen'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;