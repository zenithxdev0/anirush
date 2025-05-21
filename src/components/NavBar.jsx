import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-zinc-900/50 sticky top-0 text-white w-full px-4 py-4 z-50'>
        <div className='flex items-center justify-between gap-4'>
            <h5>ANi<span className='text-amber-200 font-bold'>RUSH</span></h5>
            <input placeholder='Search Anime' type="text" className='bg-white/30 rounded-md ps-4 py-2'/>
        </div>
    </nav>
  )
}

export default NavBar