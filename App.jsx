import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Home } from './components/home'
import { Body } from './components/body'
import { Sign } from './components/sign'




function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/body" element={<Body/>}/>
        <Route path="/sign" element={<Sign/>}/>
   
      </Routes>


     
    </div>
  )
}

export default App
