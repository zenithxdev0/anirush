import React from 'react'
import Button from '../util/Button'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <section>
      <Button color={`amber`} onClick={() => navigate('/home')}>View Website {`->`}</Button>
    </section>
  )
}

export default Landing