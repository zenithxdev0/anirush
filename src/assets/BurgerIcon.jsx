import React from 'react'

const BurgerIcon = ({ size = 24, color = "#ffffff", className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <g fill={color}>
        <rect x="3" y="6" width="18" height="2" rx="1" />
        <rect x="3" y="11" width="18" height="2" rx="1" />
        <rect x="3" y="16" width="18" height="2" rx="1" />
      </g>
    </g>
  </svg>
);

export default BurgerIcon