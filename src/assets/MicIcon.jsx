import React from 'react'

const MicIcon = ({ size = 24, color = "#0000000", className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <g fill={color}>
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M5 10v1a7 7 0 0 0 14 0v-1" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="22" x2="16" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

export default MicIcon