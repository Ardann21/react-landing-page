import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newslatter from './Components/Newslatter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Nav />
    <Hero /> 
    <Analytics />
    <Newslatter />
    <Cards /> 
    <Footer />
    </>
  )
}

export default App
