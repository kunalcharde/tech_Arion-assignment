import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid } from "@mui/material";
const Task2 = () => {
  const [data, setData] = useState([]);
  const fetching = async () => {
    const res = await axios.get(` https://gorest.co.in/public/v1/todos`);
    console.log(res.data.data);
    setData(res.data.data);
  };
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div style={{backgroundColor: '#010101',padding:15}}>
      <Grid container xs={12} spacing={5}>
      {data.map((data) => {
        return (
          <Grid item xs={4} key={data.id}>
            <Card sx={{minHeight:200,cursor: 'pointer'}}>
              <CardContent>
                <h3>{data.title}</h3>
                 <div>
                  <span>
                    Status :  
                  </span>
                   <span>
                    {data.status}
                   </span>
                 </div>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
};

export default Task2;
