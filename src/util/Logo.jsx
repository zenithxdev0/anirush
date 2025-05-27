import React from 'react'
import logo from '../assets/AniRUSH.png';

const Logo = ({onClick}) => {
  return (
    <a href='/home' onClick={onClick} className='w-24'><img src={logo} className='w-24' alt="logo" /></a>
  )
}

export default Logo