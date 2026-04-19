import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='pb-15 lg:pb-1 lg:pl-22'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout