import React from 'react'
import { Home, User, Folder } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex gap-2 flex-col align-center h-full w-[25%] md:w-[15%] xl:w-[8%] '>
      <h1 className='w-full aspect-square flex items-center justify-center text-4xl font-bold text-center rounded-full bg-white cursor-pointer  '>Ts.</h1>
      <div className='relative h-full w-full rounded-full bg-white'>
        <div className='absolute bottom-8  -translate-y-1/2 flex flex-col gap-4 items-center'>
          <Home className='w-8 h-8 cursor-pointer' />
          <User className='w-8 h-8 cursor-pointer' />
          <Folder className='w-8 h-8 cursor-pointer' />
        </div>
      </div>

    </div>
  )
}

export default Navbar 