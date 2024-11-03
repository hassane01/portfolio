import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Works from './components/Works/Works'
import './i18n'
function App() {
  return (
   <>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='works' element={<Works/>}></Route>
        <Route path='works/:id' element={<Works/>}></Route>
      </Route>
    </Routes>
   </>
  )
}

export default App
