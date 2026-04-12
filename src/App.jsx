import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome from "./Pages/Welcome"

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />  
  }
])


const App = () => {
  return (
    <RouterProvider router={rounter} />
  )
}

export default App