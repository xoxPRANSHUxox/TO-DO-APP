import React from 'react'

export default function Navbar() {
  return (
    <div className=' justify-between  mx-auto'>
      <nav className='w-full flex flex-row items-center bg-gray-700 text-yellow-200 text h-16'> 
        <div className='logo m-2 mx-5 text-2xl'>iTasks</div>
      <ul className='flex flex-row mx-auto  w-5/12 justify-evenly my-2'>
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
      </ul>
      </nav>
    </div>
  )
}
