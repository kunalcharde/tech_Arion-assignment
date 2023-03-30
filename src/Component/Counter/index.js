import { Card } from '@mui/material'
import React from 'react'
import CounterCard from './CounterComponent/Card'

const Counter = () => {
  return (
    <div style={{display:'flex',justifyContent: 'center',alignItem:'center'}}>
      <CounterCard/>
    </div>
  )
}

export default Counter
