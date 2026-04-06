import React from 'react'

const Login = () => {
  return (
    <section className='bg-white dark:bg-gray-900  h-screen'>
      <h1 className='text-3xl font-bold pl-3 text-center'>Login</h1>
      <form className='flex flex-col items-start gap-2 h-125 mt-10 pl-3'>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='email' className='border border-green-200 rounded onfocus:outline-1 outline-green-400 px-1 py-1.25 w-75' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='password' className='border border-green-200 rounded onfocus:outline-1 outline-green-400 px-1 py-1.25 w-75' />

        <button type="submit" className='bg-green-800 text-green-100 font-semibold px-10 py-2 rounded-xl mt-5 cursor-pointer hover:bg-green-100 hover:text-green-800 transition duration-300 ease-in-out'>Login</button>

      </form>

      <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          Hellow
        </span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
        
    </section >
  )
}

export default Login