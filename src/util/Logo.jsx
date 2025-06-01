import React from 'react'
import logo from '../assets/AniRUSH.png';

const Logo = ({onClick, className}) => {
  return (
    <a href='/home' onClick={onClick} className={`${className}`}><img src={logo} className={`${className}`} alt="logo" /></a>
  )
}

export default Logo