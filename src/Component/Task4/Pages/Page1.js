import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const Page1 = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Page1</h1>
      <Button variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/")}}>Index</Button>
      <Button variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page2")}}>Page2</Button>
      <Button variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page3")}}>Page3</Button>
    </div>
  )
}

export default Page1
