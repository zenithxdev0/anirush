import React from 'react'

const Button = ({color, children, onClick}) => {

    const colors = {
        amber: 'text-black bg-amber-300 hover:bg-amber-400 active:bg-amber-500',
        rose: 'text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700'
    }


  return (
    <button onClick={onClick} className={`${colors[color]} rounded-md px-6 py-3 font-semibold cursor-pointer`}>{children}</button>
  )
}

export default Button