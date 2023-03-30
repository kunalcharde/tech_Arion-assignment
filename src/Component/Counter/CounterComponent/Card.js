import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CounterCard() {

    const [counterValue,setCounterValue] =React.useState(1)
    const handleIncrement = ()=>{
        
        setCounterValue(counterValue * 3)
    }
    const handleDecrement = ()=>{
        if(counterValue!=1){
            setCounterValue(counterValue - 3)
        }     
    }
    console.log(counterValue)
  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <h1>Counter</h1>
        <div style={{display: 'flex',alignItems: 'center',justifyContent:'space-around'}}>
            <Button variant="contained" onClick={handleDecrement}>-</Button>
            <div style={{fontSize:30}}>{counterValue}</div>
            <Button variant="contained" onClick={handleIncrement}>+</Button>
            </div>          
      </CardContent>
      
    </Card>
  );
}