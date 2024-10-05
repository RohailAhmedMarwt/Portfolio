import React from 'react'
import Navber from './Components/Navber'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import 'flowbite';

const App = () => {
  return (
    <div>
      <Navber/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/my-work" element={<Projects/>} />
      <Route path="/get-in-touch" element={<Contact/>} />
      <Route path='/skills' element={<Skills/>}/>

     </Routes>
   
    </div>
  )
}

export default App
