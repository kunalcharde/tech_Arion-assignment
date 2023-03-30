import React from 'react'
import { Route,Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import Counter from '../Component/Counter'
import Task2 from '../Component/Task2'
import Task4 from '../Component/Task4'
import Page1 from '../Component/Task4/Pages/Page1'
import Page2 from '../Component/Task4/Pages/Page2'
import Page3 from '../Component/Task4/Pages/Page3'
const NavRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path={"/"} element={<App/>} />
        <Route path={"/page1"} element={<Counter/>} />
        <Route path ={"/page2"} element={<Task2/>}/>
        <Route  path ={"/page3"} element={<Task4/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default NavRoute
