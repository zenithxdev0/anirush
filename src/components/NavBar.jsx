import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../util/Logo';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/home');
  };
  return (
    <nav className=' text-white w-full py-4 z-50'>
        <div className='flex items-center justify-between gap-4'>
            <Logo onClick={handleLogoClick} />
            <input placeholder='Search Anime' type="text" className='bg-white/30 rounded-md ps-4 py-2'/>
        </div>
    </nav>
  )
}

export default NavBar