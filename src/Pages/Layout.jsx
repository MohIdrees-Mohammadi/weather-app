import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='lg:pl-[6.5%] pt-[12vh] bg-primary  lg:pt-[9vh]'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
