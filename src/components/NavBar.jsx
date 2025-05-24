import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-zinc-900/50 sticky top-0 text-white w-full py-4 z-50'>
        <div className='flex items-center justify-between gap-4'>
            <a href='/home'>ANi<span className='text-amber-200 font-bold'>RUSH</span></a>
            <input placeholder='Search Anime' type="text" className='bg-white/30 rounded-md ps-4 py-2'/>
        </div>
    </nav>
  )
}

export default NavBar