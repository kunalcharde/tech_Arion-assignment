import { Button } from '@mui/material'
import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom'
const Task4 = () => {
  const navigate = useNavigate()
  return (
    <div style={{marginBottom:50}}>
      <Button   variant="contained"  sx={{marginRight:5}}  onClick={()=>{navigate("/page1")}}>Page1</Button>
      <Button  variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page2")}}>Page2</Button>
      <Button  variant="contained"  sx={{marginRight:5}} onClick={()=>{navigate("/page3")}}>Page3</Button>
    </div>
  )
}

export default Task4
