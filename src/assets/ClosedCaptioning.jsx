import React from 'react'

const ClosedCaptioning = ({ size = 24, color = "#000000", className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <g fill={color}>
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
        <path d="M8.5 9.5C9.3 8.9 10.1 8.5 11 8.5C12.4 8.5 13.5 9.6 13.5 11C13.5 12.4 12.4 13.5 11 13.5C10.1 13.5 9.3 13.1 8.5 12.5" 
              stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14.5 9.5C15.3 8.9 16.1 8.5 17 8.5C18.4 8.5 19.5 9.6 19.5 11C19.5 12.4 18.4 13.5 17 13.5C16.1 13.5 15.3 13.1 14.5 12.5" 
              stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>
    </g>
  </svg>
);

export default ClosedCaptioning