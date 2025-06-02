import React from 'react'

const Stat = ({type, children, onClick}) => {

    const stat = {
        rating: {
            icon: '',
            color: 'bg-white'
        },
        quality: {
            icon: '',
            color: 'bg-amber-300'
        },
        sub: {
            icon: 'cc',
            color: 'bg-green-200'
        },
        dub: {
            icon: '🎙️',
            color: 'bg-pink-300'
        },
        
    }

    if (!stat[type]) return null; // optional fallback

  return (
    <small className={`${stat[type].color} text-xs font-semibold text-black py-1 px-1.5 rounded-xs text-center`} onClick={onClick}>
        {stat[type].icon} {children}
    </small>
  )
}

export default Stat