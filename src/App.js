import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'
import Content from './Components/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <SideBar />
        <Content />
        <Footer />
      </div>
    </Router>
  )
}
