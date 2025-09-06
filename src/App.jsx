import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Reset.css'
import './App.css'

import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
