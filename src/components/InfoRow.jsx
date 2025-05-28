import React from 'react'

const InfoRow = ({label, value}) => {
  return (
  <div className="flex justify-between">
    <span className="font-medium text-neutral-300">{label}:</span>
    <span className="text-neutral-100 text-right">{value}</span>
  </div>
  )
}

export default InfoRow