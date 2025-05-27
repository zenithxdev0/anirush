import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1366px] px-4 mx-auto relative ${className}`}>
        {children}
    </div>
  )
}

export default Container