import React from 'react'

const Container = ({children, className = ""}) => {
  return (
    <div className={`max-w-[1600px] p-4 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container