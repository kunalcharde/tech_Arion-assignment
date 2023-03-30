import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const Page3 = () => {
    const navigate = useNavigate()
  return (
    <div>
     <h1>Page3</h1>
      <Button  variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/")}}>Index</Button>
      <Button  variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page1")}}>Page1</Button>
      <Button  variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page2")}}>Page2</Button>
    </div>
  )
}

export default Page3
