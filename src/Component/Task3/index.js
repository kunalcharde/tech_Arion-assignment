import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';

const Task3 = () => {

const fetching = async ()=>{
    try{const response = await axios.post( 'https://admin.srkprojects.com/web/api/client/v1/contact-us/',{
        email: "ramtej.j13@gmail.com",
        message: "This is a basic message",
        name: "ramtejajakka"
     })
    console.log(response.data.data,"data")
}
    catch(err) {console.log(err.message)}
}
useEffect(()=>{
    fetching()
},[])
  return (
    <div>
      
    </div>
  )
}

export default Task3
