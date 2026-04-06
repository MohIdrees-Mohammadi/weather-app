import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Layout from './pages/Layout'
import Login from './pages/Login'

// npm i react-router-dom
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },

    ]
  },

  {
    path: "/login",
    element: <Login />
  },


  {
    path: "*",
    element: <h1>404 Page</h1>
  }

])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
