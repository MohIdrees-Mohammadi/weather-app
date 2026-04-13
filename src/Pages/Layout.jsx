import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className='flex gap-2.5 lg:p-2'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout