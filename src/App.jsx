import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome from "./Pages/Welcome"
import Layout from './Pages/Layout'
import CurrentWeather from './Pages/CurrentWeather'
import Cities from './Pages/Cities'
import Maps from './Pages/Maps'
import Settings from './Pages/Settings'

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />  
  },

  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <CurrentWeather />
      },
      {
        path: "/main/city",
        element: <Cities />
      },
      {
        path: "/main/map",
        element: <Maps />
      },
      {
        path: "/main/setting",
        element: <Settings />
      },
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={rounter} />
  )
}

export default App