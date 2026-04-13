import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome from "./Pages/Welcome"
import Layout from './Pages/Layout'
import CurrentWeather from './Pages/CurrentWeather'
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
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={rounter} />
  )
}

export default App